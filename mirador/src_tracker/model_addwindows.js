const mongoose = require("mongoose")

const mongSchema =
{
    windowId: String,
    target: String,
    message: String,
    timestamp: String,
}

const mongModel = mongoose.model("addwindowsevent",mongSchema);

module.exports = mongModel;
