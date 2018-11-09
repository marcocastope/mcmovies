package common

import (
	"encoding/json"
	"log"
	"os"
)

type configuration struct {
	Server   string
	dBHost   string
	dBUser   string
	dBPwd    string
	Database string
}

// AppConfig variable de configuración
var AppConfig configuration

func initConfig() {
	loadConfig()
}

func loadConfig() {
	file, err := os.Open("./credentials/config.json")
	if err != nil {
		log.Fatalf("error al leer config.json: %s", err)
	}
	defer file.Close()

	err = json.NewDecoder(file).Decode(&AppConfig)
	if err != nil {
		log.Fatalf("error al decodificar el archivo: %s", err)
	}

}
