import { movies } from "@prisma/client";
import { PrismaClientKnownRequestError } from "@prisma/client/runtime";
import e, { Request, Response } from "express";
import { prisma } from "../config/db";
import { movieSchemaType } from "../zod-schema/movie.schema";

export const getContractHandler = async (req: Request, res: Response) => {
  try {
    const movie = await prisma.movies.findMany();
    return res.status(200).json(movie);
  } catch (error) {
    return res.status(500).json({
      message: "Server Error!",
    });
  }
};

export const getByNameContractHandler = async (req: Request, res: Response) => {
  try {
    const movie = await prisma.movies.findMany();
    const { name } = req.params;

    const findMovie = movie.filter((movie) => {
      if (movie.name === name || movie.gener === name) return movie;
    });
    return res.status(200).json(findMovie);
  } catch (error) {
    return res.status(500).json({
      message: "Server Error!",
    });
  }
};

export const getByRatingContractHandler = async (
  req: Request,
  res: Response
) => {
  try {
    const movie = await prisma.movies.findMany();
    const { rating } = req.params;
    const findRating = movie.filter((m) => {
      if (m.rating > 1) {
        return m;
      }
    });
    return res.status(200).json(findRating);
  } catch (error) {
    return res.status(500).json({
      message: "Server Error!",
    });
  }
};

export const addContractHandler = async (req: Request, res: Response) => {
  try {
    const newMovie = req.body as movies;
    await prisma.movies.create({
      data: newMovie,
    });

    return res.status(201).json({ message: "Movie Added!" });
  } catch (error) {
    return res.status(500).json({
      message: "Server Error !",
    });
  }
};

export const updateContractHandler = async (req: Request, res: Response) => {
  try {
    const newMovie = req.body as movies;
    const { id } = req.params as movieSchemaType;
    await prisma.movies.update({
      where: { id },
      data: newMovie,
    });

    return res.status(200).json({ message: "Movie Updated!" });
  } catch (error) {
    return res.status(500).json({
      message: "Server Error !",
    });
  }
};

export const deleteContractHandler = async (req: Request, res: Response) => {
  try {
    const { id } = req.params as movieSchemaType;
    await prisma.movies.delete({
      where: { id },
    });

    return res.status(200).json({ message: "Movie Deleted!" });
  } catch (error) {
    return res.status(500).json({
      message: "Server Error !",
    });
  }
};
