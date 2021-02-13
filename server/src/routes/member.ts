import express, { Request, Response } from 'express';
const router = express.Router();
import member from '../models/Member';

//GET DATA
router.get('/', async (_: Request, res: Response) => {
    try {
        const data = await member.find();
        res.json(data);
    } catch (error) {
        res.json({ message: error });
    }
});

//CREATE DATA
router.post('/', async (req: Request, res: Response) => {
    const data = new member({
        fullname: req.body.fullname,
        email: req.body.email,
        password: req.body.password
    });
    try {
        const saveData = await data.save();
        res.json(saveData);
    } catch (error) {
        res.json({ message: error });
    }
});

//GET DATA DETAIL
router.get('/:dataID', async (req: Request, res: Response) => {
    try {
        const data = await member.findById(req.params.dataID)
        res.json(data);
    } catch (error) {
        res.json({ message: error });
    }
});

//DELETE DATA
router.delete('/:dataID', async (req: Request, res: Response) => {
    try {
        const dataRemove = await member.remove({ _id: req.params.dataID });
        res.json(dataRemove);
    } catch (error) {
        res.json({ message: error });
    }
});

//UPDATE DATA
router.patch('/:dataID', async (req: Request, res: Response) => {
    try {
        const dataUpdate = await member.updateOne({ _id: req.params.dataID }, {
            $set: {
                fullname: req.body.fullname,
                email: req.body.email,
                password: req.body.password
            }
        });
        res.json(dataUpdate);
    } catch (error) {
        res.json({ message: error });
    }
});

export default router