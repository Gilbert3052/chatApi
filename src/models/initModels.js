const Users = require('./users.models')
const RecoveryPasswords = require('./recoveryPasswords.models')
const Participants = require('./participants.models')
const Messages = require('./messages.models')
const Conversations = require('./conversations.models')

const initModels = () => {
    //? FK = RecoveryPasswords
    Users.hasMany(RecoveryPasswords)
    RecoveryPasswords.belongsTo(Users)

    //? FK = Participants
    Users.hasMany(Participants)
    Participants.belongsTo(Users)

    Conversations.hasMany(Participants)
    Participants.belongsTo(Conversations)

    //? FK = Messages
    Users.hasMany(Messages)
    Messages.belongsTo(Users)

    Conversations.hasMany(Messages)
    Messages.belongsTo(Conversations)

    //? FK = Conversations
    Users.hasMany(Conversations)
    Conversations.belongsTo(Users)

}

module.exports = initModels