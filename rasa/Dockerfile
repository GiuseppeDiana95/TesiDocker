# Usa un'immagine di base con Python
FROM python:3.8-slim

# Aggiorna il sistema e installa le dipendenze di Rasa
RUN apt-get update -y && apt-get install -y \
    python3-pip \
    && apt-get clean \
    && rm -rf /var/lib/apt/lists/*

# Crea una directory di lavoro e imposta l'ambiente di lavoro
WORKDIR /app

# Copia i requisiti del tuo progetto
COPY requirements.txt .

# Installa le dipendenze
RUN pip install --no-cache-dir -r requirements.txt

#Installa websocket
#RUN pip install websockets==10.0

#Installa websocket-client
#RUN pip install websocket-client

# Copia il contenuto del tuo progetto nella directory di lavoro
COPY . .

# Esegui l'addestramento del modello NLU e del core
RUN rasa train

# Esponi la porta in cui il server di Rasa ascolterà le richieste
EXPOSE 5005

# Avvia il server di Rasa
CMD ["rasa", "run", "-m", "models", "--enable-api"]