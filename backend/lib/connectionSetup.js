import mongoose from 'mongoose';
export default class Connection {
  constructor(
    app,
    dbURI = 'mongodb://127.0.0.1:27017/uploader-test',
    port = 8080,
    domain = 'http://localhost'
  ) {
    this.app = app;
    this.dbURI = dbURI;
    this.port = port;
    this.domain = domain;
  }

  connect() {
    mongoose
      .connect(this.dbURI)
      .then((_info) => {
        console.log('Database connected');
        this.app.listen(this.port, () => {
          console.log(`App connected to ${domain}:${port}/`);
        });
      })
      .catch((err) => console.log(err));
  }
}