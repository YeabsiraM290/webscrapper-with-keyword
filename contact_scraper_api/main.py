import json
from fastapi.middleware.cors import CORSMiddleware
from app import scrap

from fastapi import FastAPI, Request

from fastapi.responses import HTMLResponse
from fastapi.staticfiles import StaticFiles
from fastapi.templating import Jinja2Templates

app = FastAPI()

origins = ["*"]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.mount("/static", StaticFiles(directory="static"), name="static")


templates = Jinja2Templates(directory="templates")


@app.get("/", response_class=HTMLResponse)
def read_root(request:Request):
    return templates.TemplateResponse("index.html", {"request": request})


@app.get("/search/{key_term}")
def read_item(request: Request, key_term:str):
    return json.dumps(scrap(key_term, 2))
