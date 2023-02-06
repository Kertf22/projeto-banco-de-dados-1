import express from "express";

// Primeira rota

const usuarios = []

app.post("/", (req, res) => {
    const { cpf, nome, data_nascimento } = req.body;

    if (!cpf) [
        res.status(400).json({ message: "Informe o seu cpf!" })
    ]

    if (!nome) [
        res.status(400).json({ message: "Informe o seu nome!" })
    ]

    if (!data_nascimento) [
        res.status(400).json({ message: "Informe o sua data de nascimento!" })
    ]

    const usuario = {
        cpf,
        nome,
        data_nascimento
    }

    usuarios.push(usuario)

    return res.status(200).json({
        message: "Usuario criado!"
    })

})

app.get("/list", (req, res) => {


    return res.json({ usuarios })
})

const app = express();
const PORT = 3000

app.listen(PORT, () => console.log("Running in localhost:", PORT))