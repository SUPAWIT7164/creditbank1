const mysql = require('mysql2')

const pool = mysql.createPool({
  host: '127.0.0.1',
  user: 'root',
  password: '',
  database: 'credit_bank',
  timezone: '+07:00',
})

const sqlcmd = (option, value = []) => {
  return new Promise((resolve, reject) => {
    pool.getConnection(function (err, conn) {
      if (err) {
        throw err
      } else {
        conn.query(option, value, function (err, results, fields) {
          if (err) {
            console.log(err);
            reject(err)
          } else {
            resolve(JSON.parse(JSON.stringify(results)))
          }
          conn.release()
        })
      }
    })
  })
}
module.exports = {
  sqlcmd,
}
