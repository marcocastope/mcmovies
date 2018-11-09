package main

import (
	"log"
	"net/http"

	"github.com/marcocastope/mcmoviesv1/common"
	"github.com/marcocastope/mcmoviesv1/routers"
	"github.com/urfave/negroni"
)

func main() {
	// inicializo los paquets comunes
	common.StartUp()
	// inicilizao las rutas
	router := routers.InitRoutes()
	// iniciliza los middleware
	n := negroni.Classic()
	n.UseHandler(router)
	// inicializa el server
	server := &http.Server{
		Addr:    common.AppConfig.Server,
		Handler: n,
	}

	log.Printf("Servidor corriendo en %s", common.AppConfig.Server)
	log.Println(server.ListenAndServe())
}
