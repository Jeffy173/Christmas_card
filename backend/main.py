from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
from typing import Optional,List
import sqlite3
import hashlib
from fastapi.middleware.cors import CORSMiddleware 
from fastapi.staticfiles import StaticFiles
import os
from fastapi.responses import Response
import io
from PIL import Image
import base64

# create api
app=FastAPI()

# 定義可訪問的來源(CORS)
app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        # 线上环境：你的Railway域名
        # "https://endearing-alignment.up.railway.app",
        # 本地开发：常见的前端开发服务器端口
        "http://localhost:3000",
        "http://127.0.0.1:3000",
        "http://localhost:8080",
        "http://127.0.0.1:8080",
        "http://localhost:5500", # 一些Live Server的默认端口
        "http://127.0.0.1:5500",
        # "*"
    ],
    allow_credentials=True,
    allow_methods=["GET", "POST", "DELETE", "OPTIONS"],
    allow_headers=["*"],
)

# password hashing
def new_hash(s:str)->str:
    return hashlib.sha256(s.encode()).hexdigest()
pw=new_hash("123456")

@app.get("/api/")
def home():
    return {"message":"the home"}

@app.get("/api/get_photo/")
def get_photo():
    with open("backend/Christmas_card_picture.jpg", "rb") as f:
        image_bytes = f.read()
    
    return Response(
        content=image_bytes,
        media_type="image/png"
    )

@app.get("/api/get_card/")
def get_card():
    with open("backend/Christmas_card_picture.jpg","rb") as f:
        image_bytes=f.read()
        base64_str=base64.b64encode(image_bytes).decode('utf-8')
    with open("backend/card.html","r") as f:
        html_text=f.read().format(base64_str)
    return Response(
        content=html_text,
        media_type="text/html"
    )

# 靜態文件服務
app.mount("/", StaticFiles(directory="./frontend", html=True), name="frontend")

