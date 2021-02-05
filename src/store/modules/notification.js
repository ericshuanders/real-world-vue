export const namespaced = true;
export const state = {
  notifications: []
};
let nextId = 1;
export const mutations = {
  PUSH(state, notification) {
    state.notifications.push({
      //here, we are spreading in everything in the notification, plus
      //adding an id, which will automatically update incrementally
      ...notification,
      id: nextId++
    });
    console.log(notification);
    console.log(this.notifications);
    console.log(this.notifications);
  },
  DELETE(state, notificationToRemove) {
    state.notifications = state.notifications.filter(
      notification => notification.id !== notificationToRemove.id
    );
  }
};

export const actions = {
  add({ commit }, notification) {
    commit('PUSH', notification);
  },
  remove({ commit }, notificationToRemove) {
    commit('DELETE', notificationToRemove);
  }
};
