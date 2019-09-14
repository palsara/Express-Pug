const mariadb = require('mariadb');

const pool = mariadb.createPool({
  user: 'root',
  password: 'ROOT',
  database: 'fishintheweb',
});


module.exports = class DB {
  constructor() {
    pool.getConnection().then(conn => this.conn = conn);
  }

  async readProducts(id) {
    let sql = `
    SELECT *
    FROM products
    `;

    if (id) {
      sql += ` WHERE id=${id}`;
    }
    const result = await this.conn.query(sql);
    return result;
  }

  async createProduct(data) {
    const sql = `
    INSERT INTO products
    (name,price,category,img,img2,details,reviews)
    VALUES
    ('${data.name}',${data.price},'${data.category}','${data.img}','${data.img2}','${data.details}','${data.reviews}')
    `;
    const result = await this.conn.query(sql);
    return result;
  }

  async updateProduct(data) {
    const sql = `
   UPDATE products
   SET name='${data.name}',price=${data.price},category='${data.category}',img='${data.img}',img2='${data.img2}',details='${data.details}',reviews='${data.reviews}'
   WHERE id=${data.id}`;
    const result = await this.conn.query(sql);
    return result;
  }

  async deleteProduct(id) {
    const sql = `
    DELETE FROM products
    WHERE id=${id}`;
    const result = await this.conn.query(sql);
    return result;
  }

  async readOrders(id) {
    let sql = `
    SELECT *
    FROM orders
    `;

    if (id) {
      sql += ` WHERE id=${id}`;
    }
    const result = await this.conn.query(sql);
    return result;
  }

  async createOrder(data) {
    const sql = `
    INSERT INTO orders
    (product,category,username,useremail,address,quantity)
    VALUES
    (${data.product},'${data.category}','${data.username}','${data.useremail}','${data.address}',${data.quantity})
    `;
    const result = await this.conn.query(sql);
    return result;
  }

  async updateOrder(data) {
    const sql = `
   UPDATE orders
   SET product=${data.product},category='${data.category}',username='${data.username}',useremail='${data.useremail}',address='${data.address}',quantity=${data.quantity}
   WHERE id=${data.id}`;
    const result = await this.conn.query(sql);
    return result;
  }

  async deleteOrder(id) {
    const sql = `
    DELETE FROM orders
    WHERE id=${id}`;
    const result = await this.conn.query(sql);
    return result;
  }
};
