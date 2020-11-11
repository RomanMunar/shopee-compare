import pubsub from "sweet-pubsub";

const show = (toast) => pubsub.emit("toast", toast);

const success = (title) => show({ title });

const warn = (title) =>
  show({
    type: "warning",
    title: "Warn",
    message: title,
    duration: 0,
  });

const error = (err) => {
  show({
    type: "danger",
    title: "Error",
    message: err,
    duration: 0,
  });
};

export default { error, show, success, warn };
