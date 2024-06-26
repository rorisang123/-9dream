const express = require('express');
const campaignController = require('../controllers/campaignController');

const router = express.Router();

router.get('/', campaignController.getCampaigns)
router.get('/:id', campaignController.getCampaignById)
router.get('/count', campaignController.getNumberOfCampaigns)
router.get('/top5', campaignController.getTopCampaigns)
router.post('/', campaignController.createCampaign)
router.put('/:id', campaignController.updateCampaign)
router.delete('/:id', campaignController.deleteCampaign)

module.exports = router;
