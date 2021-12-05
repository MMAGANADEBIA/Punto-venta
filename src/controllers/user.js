const { exists } = require('fs-extra');
const fs = require('fs-extra');
const klaw = require('klaw');
let usuarios = [];
let usuario;
let contraseña;
module.exports = {
  index: async (req, res) =>{
    try{
      usuario = undefined;
      contraseña = undefined;
      usuarios = [];
      let estado = {
        mensaje: "iniciado",
      }
      res.render("index", {estado});
      klaw('./src/usuarios/')
      .on('readable', function(){
        let item 
        while((item = this.read())){
          usuarios.push(item.path);
        }
      })
      .on('end', () => console.dir(usuarios));
    }catch(error){
      console.error(`Algo salió mal: ${error}`)
    }
  },
  dashboard: async (req, res) =>{
    try{
      if(usuario == undefined && contraseña == undefined){
        usuario = req.body.usuario;
        contraseña = req.body.contraseña;
        fs.pathExists(`./src/usuarios/${usuario}.json`, (err, exists) => {
        console.log(err) // => null
        console.log(exists) // => false
        if (exists == true) {
          fs.readJson(`./src/usuarios/${usuario}.json`, (err, objUsuario) =>{
            if(err) console.log(err);
            if (contraseña == objUsuario.contraseña) {
              res.render("dashboard")
            }else{
              let estado = {
                estado: "credenciales incorrectas",
              }
              res.render("index", {estado});
            }
          })
        }else{
          let estado = {
            estado: "credenciales incorrectas",
          }
          res.render("index", {estado});
        }
      })
      }else{
        res.render("dashboard");
      }
    }catch(error){
      console.error(`Algo salió mal: ${error}`)
    }
  },
  inventario: async (req, res) =>{
    try{
      res.render("inventario");
    }catch(error){
      console.error(`Algo salió mal: ${error}`);
    }
  },
  ventas: async (req, res) =>{
    try {
      res.render("ventas");
    } catch (error) {
      console.error(`Algo salió mal: ${error}`)
    }
  },
  caja: async (req, res) =>{
    try {
      res.render("caja");
    } catch (error) {
      console.error(`Algo salió mal: ${error}`);
    }
  },
  cuentas: async (req, res) =>{
    try {
      res.render("cuentas");
    } catch (error) {
      console.error(`Algo salió mal: ${error}`);
    }
  },
  crear_cuenta: async (req, res) =>{
    try {
      res.render("crear_cuenta", {usuarios});
    } catch (error) {
      console.error(`Algo salió mal: ${error}`);
    }
  },
  agregar_cuenta: async (req, res) =>{
    try{
      let usuario = req.body.usuario;
      let contraseña = req.body.contraseña;
      fs.pathExists(`./src/usuarios/${usuario}.json`, (err, exists) => {
        console.log(err) // => null
        console.log(exists) // => false
        if (exists == true) {
          res.render("crear_cuenta", {usuarios});
        }else{
          fs.writeJson(
            `./src/usuarios/${usuario}.json`,
            {
              usuario: usuario,
              contraseña: contraseña,
            },
            (err) => {
              if(err) return console.error(err);
            }
          )
          res.redirect("/");
        }
      })
    }catch(error){
      console.error(`Algo salió mal: ${error}`);
    }
  }
}
