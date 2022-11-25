import { user } from "@prisma/client";
import { Request, Response } from "express";
import { prisma } from "../config/db";
import {
    getAgeUserSchemaType,
  getemailUserSchemaType,
  getOneUserSchemaType,
  userSchemaType,
} from "../zod-schema/user.schema";

export const getContractHandler = async (req: Request, res: Response) => {
  try {
    const user = await prisma.user.findMany();
    return res.status(200).json(user);
  } catch (error) {
    return res.status(500).json({
      message: "Server Error!",
    });
  }
};

export const getByIDContractHandler = async (req: Request, res: Response) => {
  try {
    const { id } = req.params as getOneUserSchemaType;
    const user = await prisma.user.findUnique({
      where: { id },
    });

    return res.status(200).json(user);
  } catch (error) {
    return res.status(500).json({
      message: "Server Error!",
    });
  }
};

export const getByEmailContractHandler = async (
  req: Request,
  res: Response
) => {
  try {
    const { email } = req.params as getemailUserSchemaType;
    const user = await prisma.user.findUnique({
      where: { email },
    });

    return res.status(200).json(user);
  } catch (error) {
    return res.status(500).json({
      message: "Server Error!",
    });
  }
};


export const getByAgeContractHandler = async (
    req: Request,
    res: Response
  ) => {
    try {
      // const { age } = req.params as getAgeUserSchemaType;
      // const user = await prisma.user.findUnique({
      //   where: { age },
      // });
  
      // return res.status(200).json(user);
    } catch (error) {
      return res.status(500).json({
        message: "Server Error!",
      });
    }
  };

export const addContractHandler = async (req: Request, res: Response) => {
  try {
    const newUser = req.body as user;
    await prisma.user.create({
      data: newUser,
    });
    return res.status(200).json({ message: "User Added!" });
  } catch (error) {
    return res.status(500).json({
      message: "Server Error!",
    });
  }
};
