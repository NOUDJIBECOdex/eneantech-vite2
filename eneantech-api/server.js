// server.js
const express = require("express");
const cors = require("cors");
const { Low } = require("lowdb");
const { JSONFile } = require("lowdb/node");
const app = express();
const port = 3000;

// Middlewares
app.use(cors());
app.use(express.json());

// Configuration LowDB
const adapter = new JSONFile("db.json");
const db = new Low(adapter);

// Initialiser la DB
async function initDB() {
  await db.read();
  db.data ||= { commandes: [] };
  await db.write();
}
initDB();

// ✅ Route test
app.get("/", (req, res) => {
  res.send("Bienvenue sur l'API ENEANTECH !");
});

// 📥 Route POST pour recevoir une commande
app.post("/commande", async (req, res) => {
  const { nom, email, telephone, produit } = req.body;

  if (!nom || !email || !telephone || !produit) {
    return res.status(400).json({ message: "Champs requis manquants." });
  }

  const nouvelleCommande = {
    id: Date.now(),
    nom,
    email,
    telephone,
    produit,
    date: new Date().toISOString()
  };

  await db.read();
  db.data.commandes.push(nouvelleCommande);
  await db.write();

  res.status(201).json({ message: "Commande enregistrée avec succès ✅", commande: nouvelleCommande });
});

// Lancer le serveur
app.listen(port, () => {
  console.log(`✅ Serveur API ENEANTECH lancé sur http://localhost:${port}`);
});
