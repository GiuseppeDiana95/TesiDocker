const express = require("express");
const router = require("express").Router();
const ClickInfo = require("../src_tracker/model_click");
const ZoomInfo = require("../src_tracker/model_zoom");
const WindowInfo = require("../src_tracker/model_addwindows");

router.route("/click").post((req,res) =>
{
  const windowId= req.body.windowId;
  const target = req.body.target;
  const message =req.body.message;
  const timestamp = req.body.timestamp;

  const newClickInfo = new ClickInfo
  ({
    windowId,
    target,
    message,
    timestamp
  })
  newClickInfo.save();
})

router.route("/zoom").post((req,res) =>
{
  const windowId= req.body.windowId;
  const target = req.body.target;
  const message =req.body.message;
  const timestamp = req.body.timestamp;

  const newZoomInfo = new ZoomInfo
  ({
    windowId,
    target,
    message,
    timestamp
  })
  newZoomInfo.save();
})
router.route("/addwindow").post((req,res) =>
{
  const windowId= req.body.windowId;
  const target = req.body.target;
  const message =req.body.message;
  const timestamp = req.body.timestamp;

  const newWindowInfo = new WindowInfo
  ({
    windowId,
    target,
    message,
    timestamp
  })
  newWindowInfo.save();
})
module.exports = router; 
