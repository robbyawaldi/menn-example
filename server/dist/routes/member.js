"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const Member_1 = __importDefault(require("../models/Member"));
router.get('/', (_, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = yield Member_1.default.find();
        res.json(data);
    }
    catch (error) {
        res.json({ message: error });
    }
}));
router.post('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const data = new Member_1.default({
        fullname: req.body.fullname,
        email: req.body.email,
        password: req.body.password
    });
    try {
        const saveData = yield data.save();
        res.json(saveData);
    }
    catch (error) {
        res.json({ message: error });
    }
}));
router.get('/:dataID', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = yield Member_1.default.findById(req.params.dataID);
        res.json(data);
    }
    catch (error) {
        res.json({ message: error });
    }
}));
router.delete('/:dataID', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const dataRemove = yield Member_1.default.remove({ _id: req.params.dataID });
        res.json(dataRemove);
    }
    catch (error) {
        res.json({ message: error });
    }
}));
router.patch('/:dataID', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const dataUpdate = yield Member_1.default.updateOne({ _id: req.params.dataID }, {
            $set: {
                fullname: req.body.fullname,
                email: req.body.email,
                password: req.body.password
            }
        });
        res.json(dataUpdate);
    }
    catch (error) {
        res.json({ message: error });
    }
}));
exports.default = router;
//# sourceMappingURL=member.js.map