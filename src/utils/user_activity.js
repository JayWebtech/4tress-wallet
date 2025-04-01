//const SESSION_TIMEOUT = 15 * 60 * 1000;
const SESSION_TIMEOUT = 1 * 60 * 5000; // 1 minute in milliseconds


export const setLastActivity = () => {
  localStorage.setItem("lastActivity", Date.now());
};

export const isSessionExpired = () => {
  const lastActivity = localStorage.getItem("lastActivity");
  const isFirstTime = localStorage.getItem("isFirstTime");
  if (isFirstTime == true) return false;
  if (!lastActivity) return true; 
  return Date.now() - parseInt(lastActivity, 10) > SESSION_TIMEOUT;
};