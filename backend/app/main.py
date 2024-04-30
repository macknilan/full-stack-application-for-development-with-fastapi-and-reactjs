#

from typing import Union
from fastapi import FastAPI
from pydantic import BaseModel

app = FastAPI()


# MODELS
class Person(BaseModel):
    id: int
    name: str
    age: int


# DATABASE
DB: list[Person] = [
    Person(id=1, name="John Doe", age=25),
    Person(id=2, name="Jane Doe", age=22),
    Person(id=3, name="John Smith", age=32),
]


@app.get("/api")
async def read_root():
    """
    Root API
    :return:
    """
    return DB


@app.get("/items/{item_id}")
async def read_item(item_id: int, q: Union[str, None] = None):
    return {"item_id": item_id, "q": q}
