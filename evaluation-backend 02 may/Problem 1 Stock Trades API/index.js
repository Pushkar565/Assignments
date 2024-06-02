const express = require('express');
const fs = require('fs');
const path = require('path');
const bodyParser = require('body-parser');
const morgan = require('morgan');

const app = express();
const PORT = 4500;
const tradesFilePath = path.join(__dirname, 'trades.json');

app.use(bodyParser.json());
app.use(morgan(':method :url :status :response-time ms - :date[clf]'));

const readTrades = () => {
  const data = fs.readFileSync(tradesFilePath, 'utf8');
  return JSON.parse(data);
};

const writeTrades = (trades) => {
  fs.writeFileSync(tradesFilePath, JSON.stringify(trades, null, 2));
};

app.post('/trades', (req, res) => {
  const trades = readTrades();
  const newTrade = req.body;
  const newId = trades.length > 0 ? trades[trades.length - 1].id + 1 : 1;
  newTrade.id = newId;
  trades.push(newTrade);
  writeTrades(trades);
  res.status(201).json(newTrade);
});

app.get('/trades', (req, res) => {
  const trades = readTrades();
  res.status(200).json({ trades });
});

app.get('/trades/:id', (req, res) => {
  const trades = readTrades();
  const trade = trades.find(t => t.id === parseInt(req.params.id, 10));
  if (trade) {
    res.status(200).json(trade);
  } else {
    res.status(404).send('ID not found');
  }
});

app.delete('/trades/:id', (req, res) => {
  let trades = readTrades();
  const tradeIndex = trades.findIndex(t => t.id === parseInt(req.params.id, 10));
  if (tradeIndex !== -1) {
    trades.splice(tradeIndex, 1);
    writeTrades(trades);
    res.status(204).send();
  } else {
    res.status(404).send('ID not found');
  }
});

app.patch('/trades/:id', (req, res) => {
  const trades = readTrades();
  const trade = trades.find(t => t.id === parseInt(req.params.id, 10));
  if (trade) {
    trade.price = req.body.price;
    writeTrades(trades);
    res.status(200).json(trade);
  } else {
    res.status(404).send('ID not found');
  }
});

app.listen(PORT, '127.0.0.1', () => {
  console.log(`Listening on port ${PORT}`);
});
