const mariadb = require('mariadb');

const pool = mariadb.createPool({
  user: 'root',
  password: 'ROOT',
  database: 'employee',
  connectionLimit: 5,
});
module.exports = class DB {
  constructor() {
    pool.getConnection().then(conn => this.conn = conn);
  }

  async read() {
    const sql = `
    SELECT *
    FROM employees`;

    const result = await this.conn.query(sql);
    return result;
  }

  async create(data) {
    const sql = `
INSERT INTO employees
('name',department,email,password,token)
VALUES
('${data.name}',${data.department},'${data.email}','${data.password}','${data.token}')`;
    const result = await this.conn.query(sql);
    return result;
  }

  async update(data) {
    const sql = `
UPDATE employees
SET name='${data.name}',department=${data.department},email='${data.email}',password='${data.password}',token='${data.token}'
WHERE id=${data.id}`;
    const result = await this.conn.query(sql);
    return result;
  }

  async delete(id) {
    const sql = `
DELETE FROM employees
WHERE id=${id}`;
    const result = await this.conn.query(sql);
    return result;
  }
};
