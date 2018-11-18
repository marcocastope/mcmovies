package main

import (
	"log"
	"net/http"

	"github.com/rs/cors"

	"github.com/marcocastope/mcmoviesv1/common"
	"github.com/marcocastope/mcmoviesv1/routers"
	"github.com/urfave/negroni"
)

func main() {

	common.StartUp()

	router := routers.InitRoutes()

	c := cors.New(cors.Options{
		AllowedOrigins: []string{"*"},
		AllowedHeaders: []string{"X-Requested-With", "Content-Type"},
		AllowedMethods: []string{"GET", "POST", "PUT", "DELETE", "OPTIONS"},
	})

	n := negroni.Classic()
	n.Use(c)
	n.UseHandler(router)

	server := &http.Server{
		Addr:    common.AppConfig.Server,
		Handler: n,
	}

	log.Printf("Servidor corriendo en %s", common.AppConfig.Server)
	log.Println(server.ListenAndServe())
}
