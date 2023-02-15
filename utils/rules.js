export const rules = {
  required(v) {
    return !!v || "Campo requerido";
  },
  email(v) {
    return (
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(v) ||
      "Correo no valido"
    );
  },
};
