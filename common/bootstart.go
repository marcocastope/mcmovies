package common

// StartUp inicializa la configuración y la session
func StartUp() {
	initConfig()
	CreateDbSession()
}
