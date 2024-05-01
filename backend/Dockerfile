
# STEP 1: BUILD THE IMAGE
# docker build -t docker-fastapi-backend -f Dockerfile .

# STEP 2: RUN THE IMAGE
# docker run -it --name container-fastapi-backend --rm -p 8000:8000 docker-fastapi-backend

# OR

# STEP 2: RUN THE IMAGE
# docker run -d --name container-fastapi-backend --rm -p 8000:8000 docker-fastapi-backend

# USO EN TIEMPO DE EJECUCION DE LA IMAGEN DE PYTHON OFICIAL COMO IMAGEN PADRE
FROM python:3.12.3 as builder

# SET ENVIRONMENT VARIBLES
ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1

WORKDIR /code

# INSTALL ANY NEEDED PACKAGES SPECIFIED IN REQUIREMENTS.TXT
COPY requirements.txt /code/
RUN pip install --upgrade pip \
    && pip install --no-cache-dir --upgrade -r requirements.txt

# -----------------
# SEGUNDA ETAPA
# -----------------

FROM python:3.12.3-slim-bookworm

WORKDIR /code

# SE COPIAN SOLO LOS ARCHIVOS NECESARIOS DE LA IMAGEN DE COMPILACIÓN
COPY --from=builder /usr/local /usr/local
COPY ./app /code/app

# HABILITAR EL PUERTO 8000 PARA QUE ESTÉ DISPONIBLE PARA EL MUNDO EXTERIOR DE ESTE CONTENEDOR
EXPOSE 8000

# RUN THE COMMAND TO START UWSGI
CMD ["uvicorn", "app.main:app", "--reload", "--port", "8000", "--host", "0.0.0.0"]
