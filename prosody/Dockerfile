FROM prosody/prosody

# Copia il file di configurazione personalizzato
COPY prosody.cfg.lua /etc/prosody/prosody.cfg.lua
RUN chown prosody:prosody /etc/prosody/prosody.cfg.lua
RUN mkdir /etc/prosody/conf.d
COPY localhost.cfg.lua /etc/prosody/conf.d
RUN chown prosody:prosody /etc/prosody/conf.d/localhost.cfg.lua

RUN prosodyctl register rasabot localhost rasabot
RUN prosodyctl register user localhost 123456
