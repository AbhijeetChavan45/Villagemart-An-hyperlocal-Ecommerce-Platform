

const mongoose = require('mongoose');
require('dotenv').config();
const Product = require('./models/Product');


const adminVendorId = '68e6c18ff12e7e804b38f40f'; 

const productsData = [
  { name: "Mango", price: 150, unit: "/ kg", img: "https://images.unsplash.com/photo-1685429631345-3de21cc2eb65?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=735", category: "Fruits & Vegetables" },
  { name: "Banana", price: 40, unit: "/ dozen", img: "https://images.unsplash.com/photo-1640958900081-7b069dd23e9c?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1171", category: "Fruits & Vegetables" },
  { name: "Apple", price: 180, unit: "/ kg", img: "https://images.unsplash.com/photo-1576179635662-9d1983e97e1e?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=687", category: "Fruits & Vegetables" },
  { name: "Orange", price: 120, unit: "/ kg", img: "https://images.unsplash.com/photo-1547514701-42782101795e?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8b3JhbmdlfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=600", category: "Fruits & Vegetables" },
  { name: "Pineapple", price: 60, unit: "/ piece", img: "https://images.unsplash.com/photo-1496637721836-f46d116e6d34?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHBpbmVhcHBsZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=600", category: "Fruits & Vegetables" },
  { name: "Watermelon", price: 30, unit: "/ kg", img: "https://images.unsplash.com/photo-1587049352846-4a222e784d38?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d2F0ZXJtZWxvbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=600", category: "Fruits & Vegetables" },
  { name: "Tomato", price: 50, unit: "/ kg", img: "https://images.unsplash.com/photo-1582284540020-8acbe03f4924?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dG9tYXRvfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=600", category: "Fruits & Vegetables" },
  { name: "Onion", price: 40, unit: "/ kg", img: "https://images.unsplash.com/photo-1618512496248-a07fe83aa8cb?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8b25pb258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=600", category: "Fruits & Vegetables" },
  { name: "Potato", price: 35, unit: "/ kg", img: "https://images.unsplash.com/photo-1518977676601-b53f82aba655?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cG90YXRvfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=600", category: "Fruits & Vegetables" },
  { name: "Brinjal", price: 60, unit: "/ kg", img: "https://images.unsplash.com/photo-1683543122945-513029986574?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YnJpbmphbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=600", category: "Fruits & Vegetables" },
  { name: "Carrot", price: 70, unit: "/ kg", img: "https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2Fycm90fGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=600", category: "Fruits & Vegetables" },
  { name: "Spinach", price: 25, unit: "/ bunch", img: "https://images.unsplash.com/photo-1576045057995-568f588f82fb?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c3BpbmFjaHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=600", category: "Fruits & Vegetables" },
  { name: "Cabbage", price: 40, unit: "/ kg", img: "https://images.unsplash.com/photo-1594282486552-05b4d80fbb9f?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2FiYmFnZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=600", category: "Fruits & Vegetables" },
  { name: "Cauliflower", price: 50, unit: "/ piece", img: "https://images.unsplash.com/photo-1566842600175-97dca489844f?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2F1bGlmbG93ZXJ8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=600", category: "Fruits & Vegetables" },
  { name: "Green Chilli", price: 80, unit: "/ kg", img: "https://images.unsplash.com/photo-1524593410820-38510f580a77?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Z3JlZW4lMjBjaGlsbGl8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=600", category: "Fruits & Vegetables" },
  { name: "Ginger", price: 150, unit: "/ kg", img: "https://images.unsplash.com/photo-1635008388183-04ea0313c5d1?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGdpbmdlcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=600", category: "Fruits & Vegetables" },
  { name: "Garlic", price: 200, unit: "/ kg", img: "https://images.unsplash.com/photo-1540148426945-6cf22a6b2383?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Z2FybGljfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=600", category: "Fruits & Vegetables" },
  { name: "Ladyfinger", price: 50, unit: "/ kg", img: "https://images.unsplash.com/photo-1664289242854-e99d345cfa92?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bGFkeWZpbmdlcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=600", category: "Fruits & Vegetables" },
  { name: "Bitter Gourd", price: 60, unit: "/ kg", img: "https://images.unsplash.com/photo-1720680052575-e629a9eff73b?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Yml0dGVyJTIwZ291cmR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=600", category: "Fruits & Vegetables" },
  { name: "Pumpkin", price: 45, unit: "/ kg", img: "https://images.unsplash.com/photo-1509622905150-fa66d3906e09?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHVtcGtpbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=600", category: "Fruits & Vegetables" },

  //  Grains 
  { name: "Basmati Rice", price: 90, unit: "/ kg", img: "https://images.unsplash.com/photo-1686820740687-426a7b9b2043?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YmFzbWF0aSUyMHJpY2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=600", category: "Grains" },
  { name: "Brown Rice", price: 70, unit: "/ kg", img: "https://images.unsplash.com/photo-1613728913341-8f29b02b8253?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YnJvd24lMjByaWNlfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=600", category: "Grains" },
  { name: "Wheat", price: 40, unit: "/ kg", img: "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8d2hlYXR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=600", category: "Grains" },
  { name: "Barley", price: 55, unit: "/ kg", img: "https://images.unsplash.com/photo-1582363476910-3223e5fd0b32?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1415", category: "Grains" },
  { name: "Millet (Bajra)", price: 60, unit: "/ kg", img: "https://plus.unsplash.com/premium_photo-1671130295829-23e2b49874a2?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bWlsbGV0fGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=600", category: "Grains" },
  { name: "Jowar", price: 45, unit: "/ kg", img: "https://t3.ftcdn.net/jpg/00/72/47/98/360_F_72479836_KlOYyThDVXvVAAKVJ0RuLATOi49EfbJq.jpg", category: "Grains" },
  { name: "Maize", price: 35, unit: "/ kg", img: "https://plus.unsplash.com/premium_photo-1667047165840-803e47970128?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bWFpemV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=600", category: "Grains" },
  { name: "Oats", price: 120, unit: "/ kg", img: "https://images.unsplash.com/photo-1614373532018-92a75430a0da?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8b2F0c3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=600", category: "Grains" },
  { name: "Quinoa", price: 250, unit: "/ kg", img: "https://plus.unsplash.com/premium_photo-1671130295828-efd9019faee0?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cXVpbm9hfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=600", category: "Grains" },
  { name: "Lentils", price: 100, unit: "/ kg", img: "https://plus.unsplash.com/premium_photo-1671130295987-13d3b3b4e9dc?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bGVudGlsc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=600", category: "Grains" },
  { name: "Chickpeas", price: 80, unit: "/ kg", img: "https://plus.unsplash.com/premium_photo-1675237624857-7d995e29897d?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y2hpY2twZWFzfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=600", category: "Grains" },
  { name: "Green Gram", price: 90, unit: "/ kg", img: "https://images.unsplash.com/photo-1632640110804-58827a6b37fd?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGdyZWVuJTIwZ3JhbXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=600", category: "Grains" },
  { name: "Black Gram", price: 110, unit: "/ kg", img: "https://plus.unsplash.com/premium_photo-1726072357017-0af7b90a463d?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8YmxhY2slMjBncmFtfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=600", category: "Grains" },
  { name: "Kidney Beans", price: 140, unit: "/ kg", img: "https://images.unsplash.com/flagged/photo-1577226259316-c566059cd6fc?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8a2lkbmV5JTIwYmVhbnN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=600", category: "Grains" },
  { name: "Soybeans", price: 70, unit: "/ kg", img: "https://images.unsplash.com/photo-1728931340168-3869028e99e7?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1974", category: "Grains" },
  { name: "Peanuts", price: 95, unit: "/ kg", img: "https://images.unsplash.com/photo-1524594345772-c953a3ae53e8?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGVhbnV0c3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=600", category: "Grains" },
  { name: "Mustard Seeds", price: 150, unit: "/ kg", img: "https://images.unsplash.com/photo-1578129377420-4795675e892e?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8TXVzdGFyZCUyMHNlZWR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=600", category: "Grains" },
  { name: "Sesame Seeds", price: 200, unit: "/ kg", img: "https://images.unsplash.com/photo-1628317321557-68729bee6644?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2VzYW1lJTIwc2VlZHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=600", category: "Grains" },
  { name: "Jaggery", price: 90, unit: "/ kg", img: "https://media.istockphoto.com/id/2150007871/photo/organic-gur-or-jaggery-powder-and-cubes-jaggery-is-used-as-an-ingredient-in-sweet-and-savoury.jpg?s=612x612&w=0&k=20&c=Lgf3hZohYCtrcCxIdShAl8I1xclTtp5wCBT9JKcE8eM= ", category: "Grains" },

  //  Clothes (
  { name: "Cotton Kurta", price: 450, unit: "", img: "https://images.unsplash.com/photo-1667665970121-c3504c519cda?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGt1cnRhfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=600", category: "Clothes" },
  { name: "Silk Saree", price: 1200, unit: "", img: "https://images.unsplash.com/photo-1588140686379-1b76a52103dc?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHNpbGslMjBzYXJlZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=600", category: "Clothes" },
  { name: "Denim Jeans", price: 800, unit: "", img: "https://images.unsplash.com/photo-1602293589930-45aad59ba3ab?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZGVuaW0lMjBqZWFuc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=600", category: "Clothes" },
  { name: "T-Shirt", price: 300, unit: "", img: "https://plus.unsplash.com/premium_photo-1673356302067-aac3b545a362?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dHNoaXJ0fGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=600", category: "Clothes" },
  { name: "Shirt", price: 500, unit: "", img: "https://images.unsplash.com/photo-1740711152088-88a009e877bb?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHNoaXJ0c3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=600", category: "Clothes" },
  { name: "Woolen Sweater", price: 900, unit: "", img: "https://plus.unsplash.com/premium_photo-1670930887547-518452a967fb?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8c3dlYXRlcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=600", category: "Clothes" },
  { name: "Cotton Dupatta", price: 250, unit: "", img: "https://images.unsplash.com/photo-1717585679395-bbe39b5fb6bc?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZHVwYXR0YXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=600", category: "Clothes" },
  { name: "Kurti", price: 600, unit: "", img: "https://images.unsplash.com/photo-1715859019107-90c16285b149?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGt1cnRpfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=600", category: "Clothes" },
  { name: "Formal Pants", price: 700, unit: "", img: "https://plus.unsplash.com/premium_photo-1689977493146-ed929d07d97e?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Zm9ybWFsJTIwcGFudHN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=600", category: "Clothes" },
  { name: "Cotton Saree", price: 850, unit: "", img: "https://images.unsplash.com/photo-1616756141603-6d37d5cde2a2?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1074", category: "Clothes" },
  { name: "Traditional Dhoti", price: 400, unit: "", img: "https://images.unsplash.com/photo-1650632784437-07f2aecafc28?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8ZGhvdGl8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=600", category: "Clothes" },
  { name: "Track Pants", price: 500, unit: "", img: "https://images.unsplash.com/photo-1719473466836-ff9f5ebe0e1b?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dHJhY2slMjBwYW50c3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=600", category: "Clothes" },
  { name: "Lehenga Choli", price: 2500, unit: "", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShxtF1-bBCjKNBchB93_R7v5t-2aNY7fI6KTN6AAbAvMY7cSXDrP-yTgncn02Ih8zENZk5UQ&s", category: "Clothes" },
  { name: "Shorts", price: 350, unit: "", img: "https://images.unsplash.com/photo-1591195853828-11db59a44f6b?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2hvcnRzfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=600", category: "Clothes" },
  { name: "Blazer", price: 1800, unit: "", img: "https://images.unsplash.com/photo-1593030942428-a5451dca4b42?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8YmxhemVyfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=600https://images.unsplash.com/photo-1560774358-d727658f457c?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2FwfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=600", category: "Clothes" },
  { name: "Cap", price: 150, unit: "", img: "https://images.unsplash.com/photo-1560774358-d727658f457c?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2FwfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=600", category: "Clothes" },
  { name: "Jacket", price: 1200, unit: "", img: "https://images.unsplash.com/photo-1551028719-00167b16eac5?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8amFja2V0fGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=600", category: "Clothes" },
  { name: "Skirt", price: 500, unit: "", img: "https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2tpcnR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=600", category: "Clothes" },
  { name: "Socks", price: 100, unit: "", img: "https://images.unsplash.com/photo-1640026199235-c24aa417b552?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c29ja3N8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=600", category: "Clothes" },
  { name: "Shoes", price: 1500, unit: "", img: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8c2hvZXN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=600", category: "Clothes" },

  //  Handicrafts 
  { name: "Earthen Pot", price: 200, unit: "", img: "https://images.unsplash.com/photo-1709432659836-d01188575b53?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZWFydGhlbiUyMHBvdHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=600", category: "Handicrafts" },
  { name: "Handmade Basket", price: 350, unit: "", img: "https://images.unsplash.com/photo-1758487424832-a53ae6cdefdb?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aGFuZG1hZGUlMjBiYXNrZXR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=600", category: "Handicrafts" },
  { name: "Clay Toys", price: 150, unit: "", img: "https://images.unsplash.com/photo-1711008009097-e4e6ee777064?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y2xheSUyMHRveXN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=600", category: "Handicrafts" },
  { name: "Wooden Carving", price: 800, unit: "", img: "https://plus.unsplash.com/premium_photo-1675370610192-3b9b9570391a?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8d29vZGVuJTIwY2FydmluZ3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=600", category: "Handicrafts" },
  { name: "Brass Lamp", price: 1200, unit: "", img: "https://images.unsplash.com/photo-1555488205-d5e67846cf40?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bGFtcHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=600", category: "Handicrafts" },
  { name: "Handwoven Mat", price: 400, unit: "", img: "https://images.unsplash.com/photo-1583674767461-99d1a9850069?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWF0fGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=600", category: "Handicrafts" },
  { name: "Jute Bag", price: 300, unit: "", img: "https://images.unsplash.com/photo-1651328907620-bb47ff23e251?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGp1dGUlMjBiYWd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=600", category: "Handicrafts" },
  { name: "Wall Hanging", price: 500, unit: "", img: "https://images.unsplash.com/photo-1578732707932-769a8376bbf6?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8d2FsbCUyMGhhbmdpbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=600", category: "Handicrafts" },
  { name: "Handmade Toys", price: 250, unit: "", img: "https://images.unsplash.com/photo-1674069698102-682409828872?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGhhbmRtYWRlJTIwdG95c3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=600", category: "Handicrafts" },
  { name: "Cane Chair", price: 1500, unit: "", img: "https://plus.unsplash.com/premium_photo-1723834562788-8d88f18087ec?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y2FuZSUyMGNoYWlyfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=600", category: "Handicrafts" },
  { name: "Stone Sculpture", price: 3000, unit: "", img: "https://images.unsplash.com/photo-1684397876661-0739440c9f26?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c3RvbmUlMjBzY3VscHR1cmV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=600", category: "Handicrafts" },
  { name: "Hand-painted Pot", price: 600, unit: "", img: "https://images.unsplash.com/photo-1585533337541-1549f1274711?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cG90fGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=600", category: "Handicrafts" },
  { name: "Terracotta Vase", price: 700, unit: "", img: "https://plus.unsplash.com/premium_photo-1680546332227-8790275c9a57?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8dGVycmFjb3RhJTIwdmFzZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=600", category: "Handicrafts" },
  { name: "Bamboo Basket", price: 350, unit: "", img: "https://images.unsplash.com/photo-1635719918971-bf907c2b1281?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmFtYm9vJTIwYmFza2V0fGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=600", category: "Handicrafts" },
  { name: "Decorative Mirror", price: 1000, unit: "", img: "https://images.unsplash.com/photo-1656797590428-653803a957fd?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bWlycm9yfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=600", category: "Handicrafts" },
  { name: "Woolen Rug", price: 2500, unit: "", img: "https://plus.unsplash.com/premium_photo-1725721362512-2f47d969e554?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8d29vbGVuJTIwcnVnfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=600", category: "Handicrafts" },
  { name: "Handmade Diary", price: 200, unit: "", img: "https://images.unsplash.com/photo-1547320945-57e5ef9549c8?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGhhbmRtYWRlJTIwZGlhcnl8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=600", category: "Handicrafts" },
  { name: "Coconut Shell Bowl", price: 350, unit: "", img: "https://images.unsplash.com/photo-1510035618584-c442b241abe7?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Ym93bHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=600", category: "Handicrafts" },
  { name: "Traditional Painting", price: 5000, unit: "", img: "https://plus.unsplash.com/premium_photo-1691030926024-4a5664b37ef8?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8dHJhZGl0aW9uYWwlMjBwYWludGluZ3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=600", category: "Handicrafts" },
  { name: "Handmade Jewellery", price: 800, unit: "", img: "https://images.unsplash.com/photo-1722510825242-0d8f2064c2e2?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aGFuZG1hZGUlMjBqZXdlbHJ5fGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=600", category: "Handicrafts" },

  //  Electronics 
  { name: "Earphones", price: 500, unit: "", img: "https://plus.unsplash.com/premium_photo-1677838847804-4054143fb91a?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8ZWFycGhvbmVzfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=600", category: "Electronics" },
  { name: "Bluetooth Speaker", price: 1200, unit: "", img: "https://plus.unsplash.com/premium_photo-1677159499898-b061fb5bd2d7?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Ymx1ZXRvb3RoJTIwc3BlYWtlcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=600", category: "Electronics" },
  { name: "Mobile Charger", price: 300, unit: "", img: "https://images.unsplash.com/photo-1727885796960-70a0adfe40ef?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bW9iaWxlJTIwY2hhcmdlcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=600", category: "Electronics" },
  { name: "Power Bank", price: 1500, unit: "", img: "https://images.unsplash.com/photo-1594843665794-446ce915d840?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cG93ZXIlMjBiYW5rfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=600", category: "Electronics" },
  { name: "Smart Watch", price: 2500, unit: "", img: "https://images.unsplash.com/photo-1546868871-7041f2a55e12?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c21hcnQlMjB3YXRjaHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=600", category: "Electronics" },
  { name: "USB Cable", price: 150, unit: "", img: "https://images.unsplash.com/photo-1657181253444-66c4745d5a86?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHVzYiUyMGNhYmxlfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=600", category: "Electronics" },
  { name: "LED Bulb", price: 100, unit: "", img: "https://images.unsplash.com/photo-1532007271951-c487760934ae?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bGVkJTIwYnVsYnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=600", category: "Electronics" },
  { name: "Table Fan", price: 1800, unit: "", img: "https://images.unsplash.com/photo-1759339206229-b10e61dd9089?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8dGFibGUlMjBmYW58ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=600", category: "Electronics" },
  { name: "Mixer Grinder", price: 3500, unit: "", img: "https://images.unsplash.com/photo-1585237672814-8f85a8118bf6?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bWl4ZXJ8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=600", category: "Electronics" },
  { name: "Iron", price: 900, unit: "", img: "https://images.unsplash.com/photo-1489274495757-95c7c837b101?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aXJvbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=600", category: "Electronics" },
  { name: "Calculator", price: 400, unit: "", img: "https://images.unsplash.com/photo-1711344397160-b23d5deaa012?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y2FsY3VsYXRvcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=600", category: "Electronics" },
  { name: "Radio", price: 700, unit: "", img: "https://images.unsplash.com/photo-1722141953853-8e3a378e2e7c?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cmFkaW98ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=600", category: "Electronics" },
  { name: "Flashlight Torch", price: 250, unit: "", img: "https://images.unsplash.com/photo-1580846841980-225e3e2832ae?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Zmxhc2hsaWdodCUyMHRvcmNofGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=600", category: "Electronics" },
  { name: "Trimmer", price: 1200, unit: "", img: "https://images.unsplash.com/photo-1508380702597-707c1b00695c?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dHJpbW1lcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=600", category: "Electronics" },
  { name: "Induction Stove", price: 2800, unit: "", img: "https://plus.unsplash.com/premium_photo-1718051622749-4b7b79e9bba4?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8aW5kdWN0aW9uJTIwc3RvdmV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=600", category: "Electronics" },
  { name: "Rechargeable Lantern", price: 1500, unit: "", img: "https://images.unsplash.com/photo-1596093019686-550d740a2870?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bGFudGVybnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=600", category: "Electronics" },
  { name: "Ceiling Fan", price: 3500, unit: "", img: "https://images.unsplash.com/photo-1714165168854-905575566f74?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Y2VsbGluZyUyMGZhbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=600", category: "Electronics" },
  { name: "Headphones", price: 2000, unit: "", img: "https://images.unsplash.com/photo-1545127398-14699f92334b?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aGVhZHBob25lc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=600", category: "Electronics" },
  { name: "LED TV", price: 18000, unit: "", img: "https://images.unsplash.com/photo-1611484550037-d5a0da2b1446?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGxlZCUyMHR2fGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=600", category: "Electronics" },

  //dairy
  { name: "Amul milk", price: 52, unit: "/1 litre", img: "https://images.unsplash.com/photo-1757857843388-b8e0127e1cef?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YW11bCUyMG1pbGt8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=600", category: "Dairy" },
  {
    name: "Fresh Buffalo Milk",
    price: 65,
    unit: "/ litre",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsFI9mGtCghCdUuWm8T1GmAy-KMqf3k0WbAg&s",
    category: "Dairy",

  },
  {
    name: "Homemade Curd (Dahi)",
    price: 40,
    unit: "/ 500g",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-tea6OFM6KiTDwMe0ENPjf4cqmITvakWuxw&s",
    category: "Dairy",

  },

  {
    name: "Pure Cow Ghee",
    price: 350,
    unit: "/ 500ml",
    img: "https://ueirorganic.com/cdn/shop/files/purecowghee.jpg?v=1689066451.com/250x200?text=Ghee",
    category: "Dairy",
  },
  {
    name: "Local White Butter (Loni)",
    price: 90,
    unit: "/ 200g",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhfUCG41nH-GoXP7ceN5BQi5Mte6NM0ShTyQ&s.com/250x200?text=Butter",
    category: "Dairy",
    description: "Traditional homemade white butter, unsalted and full of flavour. Known locally as 'Loni'."
  },


  //  Tools & Equipment
 
  {
    name: "Iron Spade (Phavda)",
    price: 350,
    unit: "/ piece",
    img: "https://images.unsplash.com/photo-1728988258941-efebc28c86eb?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aXJvbiUyMHNwYWRlfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=600.com/250x200?text=Spade",
    category: "Tools & Equipment",

  },
  {
    name: "Hand Sickle (Koyta)",
    price: 180,
    unit: "/ piece",
    img: "https://plus.unsplash.com/premium_photo-1678726492727-3b88020f0fcc?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c2lja2xlfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=600",
    category: "Tools & Equipment",

  },
  {
    name: "Garden Hoe (Kudal)",
    price: 250,
    unit: "/ piece",
    img: "https://plus.unsplash.com/premium_photo-1678677943695-d121953beafa?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1974",
    category: "Tools & Equipment",

  },
  {
    name: "Basic Toolkit Set",
    price: 550,
    unit: "/ set",
    img: "https://plus.unsplash.com/premium_photo-1683140705462-11ed388653cf?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dG9vbGtpdHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=600",
    category: "Tools & Equipment",

  },
  {
    name: "Jute Rope (10 meters)",
    price: 120,
    unit: "/ bundle",
    img: "https://images.unsplash.com/photo-1615486172027-23610c38d3a8?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cm9wZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=600",
    category: "Tools & Equipment",

  },


  
  //  Spices & Masalas
 
  {
    name: "Turmeric Powder (Haldi)",
    price: 50,
    unit: "/ 200g",
    img: "https://images.unsplash.com/photo-1615485500834-bc10199bc727?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dHVybWVyaWMlMjBwb3dkZXJ8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=600",
    category: "Spices & Masalas",

  },
  {
    name: "Red Chilli Powder (Mirchi)",
    price: 70,
    unit: "/ 200g",
    img: "https://images.unsplash.com/photo-1702041295471-01b73fd39907?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cmVkJTIwY2hpbGxpJTIwcG93ZGVyfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=600",
    category: "Spices & Masalas",

  },
  {
    name: "Coriander Powder (Dhania)",
    price: 45,
    unit: "/ 200g",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzPeZLvDi-WDTYLDd1yNBjLJPw2oyIc5g3_g&s",
    category: "Spices & Masalas",

  },
  {
    name: "Garam Masala",
    price: 80,
    unit: "/ 100g",
    img: "https://images.unsplash.com/photo-1603122612817-2fe0e0631a93?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z2FyYW0lMjBtYXNhbGF8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=600",
    category: "Spices & Masalas",

  },

   // Home & Kitchen
 
  {
    name: "Clay Water Pot (Matka)",
    price: 250,
    unit: "/ piece",
    img: "https://images.unsplash.com/photo-1640486954311-9beda9ccc11f?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHdhdGVyJTIwcG90fGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=600",
    category: "Home & Kitchen",

  },
  {
    name: "Coconut Fibre Broom (Jhadu)",
    price: 250,
    unit: "/ piece",
    img: "https://images.unsplash.com/photo-1638900999395-22595e1785f6?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YnJvb218ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=600m",
    category: "Home & Kitchen",

  },
  {
    name: "Plate Set (4 pcs)",
    price: 400,
    unit: "/ set",
    img: "https://images.unsplash.com/photo-1484632105053-8662f3194e7f?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHBsYXRlfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=600",
    category: "Home & Kitchen",

  },
];



const importData = async () => {
  try {
    if (!adminVendorId || adminVendorId === 'PASTE_YOUR_ADMIN_ID_HERE') {
      console.error('ERROR: Please paste your admin vendor ID into the seeder.js file.');
      process.exit(1);
    }

    await mongoose.connect(process.env.MONGO_URI);
    console.log('MongoDB connected for seeding...');

    
    await Product.deleteMany({ vendor: adminVendorId });
    console.log('Old admin products have been deleted.');

  
    const productsToInsert = productsData.map(product => ({
      ...product,
      vendor: adminVendorId
    }));

    await Product.insertMany(productsToInsert);

    console.log('Data Imported Successfully!');
    process.exit();
  } catch (error) {
    console.error('Error with data import:', error);
    process.exit(1);
  }
};

importData();