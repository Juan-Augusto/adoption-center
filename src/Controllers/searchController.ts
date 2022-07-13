import { Request, Response } from "express";
import {Pet} from "../Models/pet";
import { createMenuObject } from "../Helpers/createMenuObject";


export const search = (req: Request, res: Response) => {
    let query: string = req.query.q as string;
    let list = Pet.getByName(query);

    if(!query){
        res.redirect('/');
        return;
    }

    res.render('pages/page', {
        menu: createMenuObject(''),
        list,
        query
    })
}