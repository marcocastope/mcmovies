package common

import (
	"encoding/json"
	"log"
	"net/http"
)

type messageDisplay struct {
	Message string `json:"message"`
	Code    int    `json:"code"`
}

// DisplayMessage  muestra el mensaje al cliente
func DisplayMessage(w http.ResponseWriter, message string, code int) {
	messageObj := messageDisplay{
		Message: message,
		Code:    code,
	}
	bs, err := json.Marshal(messageObj)
	if err != nil {
		log.Fatalf("error al convertir el message en bytes: %s", err)
	}
	w.Header().Set("Content-Type", "application/json")
	w.WriteHeader(code)
	w.Write(bs)
}
