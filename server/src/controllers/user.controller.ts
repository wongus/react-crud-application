import { Request, Response } from "express";
import { getRepository } from "typeorm";
import { User } from "../entity/User";

const bcrypt = require("bcrypt");

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
  const results = await getRepository(User).findOne({
    where: { username: req.body.username },
  });
  if (results !== undefined) {
    bcrypt.compare(req.body.password, results.password, function (
      err: Error,
      result: Boolean
    ) {
      if (result == true) {
        res.send("Acces granted");
      } else {
        res.status(400);
        res.send("Invalid user or password");
      }
    });
  } else {
    res.status(400);
    res.send("Invalid user or password");
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
