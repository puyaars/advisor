// user events
module.exports.USER_LOGIN = 'user/login';
module.exports.USER_REGISTER = 'user/register';
module.exports.USER_UPDATE_USER = 'user/update-user';
module.exports.USER_UPDATE_EMAIL = 'user/update-email';
module.exports.USER_UPDATE_NAME = 'user/update-name';
module.exports.USER_UPDATE_AVATAR = 'user/update-avatar';
module.exports.USER_UPDATE_BIO = 'user/update-bio';
module.exports.USER_LOGOUT = 'user/logout';
module.exports.USER_CHANGE_PASSWORD = 'user/change-password';
// message events
module.exports.MESSAGE_SEND = 'message/send';
module.exports.MESSAGE_GET = 'message/get';
module.exports.MESSAGE_UPDATE = 'message/update';
module.exports.MESSAGE_DELETE = 'message/delete';
//student events
module.exports.STUDENT_GET = 'student/get';
module.exports.STUDENT_UPDATE = 'student/update';
// blog events
module.exports.BLOG_SEND = 'blog/send';
module.exports.BLOG_GET = 'blog/get';
module.exports.BLOG_UPDATE = 'blog/update';
module.exports.BLOG_DELETE = 'blog/delete';
// enums
module.exports.UserTypes = {advisor:'advisor',student:'student'};
module.exports.ActionTypes = {message:'message'};
// io events
module.exports.DISCONNECT = 'disconnect';