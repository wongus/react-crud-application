import { Request, Response } from "express";
import { getRepository } from "typeorm";
import { User } from "../entity/User";
import { Token } from "../entity/Token"

const bcrypt = require("bcrypt");
var jwt = require('jsonwebtoken');

export const getUsers = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const users = await getRepository(User).find();
  return res.json(users);
};

export const getUser = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const results = await getRepository(User).findOne(req.params.id);
  return res.json(results);
};

export const authenticateUser = async function (req: Request, res: Response) {
  const user = await getRepository(User).findOne({
    where: { username: req.body.username },
  });
  if (user !== undefined) {
    bcrypt.compare(req.body.password, user.password, async function (
      err: Error,
      isValid: Boolean
    ) {
      if (isValid == true) {
      var token = jwt.sign({ id: user.id , username: user.username }, 'verySecureKey');
        const newToken = await getRepository(Token).save({
            user: user.id,
            token: token,
            lastTimestamp: Math.round((new Date()).getTime() / 1000),
            hostName: req.hostname,
            createdTimestamp: Math.round((new Date()).getTime() / 1000),
        });
        console.log(newToken)
        res.json(          {
          "status": true,
          "message":null,
          "payload": {
            "username": user.username,
            "token":token
          }
        })
        // res.send("Acces granted");
      } else {
        res.json(
          {
            "status": false,
            "message":"Invalid credentials, please try again",
            "payload": null
          })
      }
    });
  } else {
    res.json(
      {
        "status": false,
        "message":"Invalid credentials, please try again",
        "payload": null
      })
  }
};

export const createUser = async function (req: Request, res: Response) {
  bcrypt.hash(req.body.password, 10, async function (err: Error, hash: string) {
    req.body.password = hash;
    const newUser = await getRepository(User).create(req.body);
    const results = await getRepository(User).save(newUser);
    return res.json(results);
  });
};

export const updateUser = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const user = await getRepository(User).findOne(req.params.id);
  if (user) {
    getRepository(User).merge(user, req.body);
    const results = await getRepository(User).save(user);
    return res.json(results);
  }
  return res.json({ msg: "user not found" });
};

export const deleteUser = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const results = await getRepository(User).delete(req.params.id);
  return res.json(results);
};
