package factory

import (
	"database/sql"
	"fmt"
	_ "github.com/go-sql-driver/mysql"
	"github.com/mynaparrot/plugnmeet-server/pkg/config"
	log "github.com/sirupsen/logrus"
	"time"
)

func NewDbConnection() {
	mf := config.AppCnf.MySqlInfo
	fmt.Println(mf)
	fmt.Println(mf.Host)
	fmt.Println(mf.Username)
	fmt.Println(mf.Port)
	
	// db, err := sql.Open("mysql", fmt.Sprintf("%s:%s@tcp(%s:%d)/%s", mf.Username, mf.Password, "10.102.130.73", 3306, mf.DBName))
	db, err := sql.Open("mysql", fmt.Sprintf("%s:%s@tcp(%s:%d)/%s", mf.Username, mf.Password, mf.Host, mf.Port, mf.DBName))

	if err != nil {
		log.Fatalln(err)
	}

	db.SetConnMaxLifetime(time.Minute * 3)
	db.SetMaxOpenConns(150)
	db.SetMaxIdleConns(5)

	err = db.Ping()
	if err != nil {
		log.Fatalln(err)
	}

	config.AppCnf.DB = db
}
