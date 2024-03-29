const db = require('../database/db');

const getCampaigns = (request, response) => {
    db.query('SELECT * FROM campaigns', (error, results) => {
      if (error) {
        response.status(500).json({ message: error.message });
      }
      response.status(200).json(results.rows)
    })
  }

const getCampaignById = async (req, res) => {
    const CampaignId = req.params.id;
  
    try {
      const result = await db.query('SELECT * FROM Campaigns WHERE Campaign_id = $1', [CampaignId]);
  
      if (result.rows.length > 0) {
        res.status(200).json(result.rows[0]);
      } else {
        res.status(404).json({ message: 'Campaign not found' });
      }
    } catch (err) {
      console.error('Error executing query', err);
      res.status(500).json({ message: 'Internal server error' });
    }
  };
  
  const createCampaign = async (req, res) => {
    const { campaigner_id } = req.body;
  
    try {
      const result = await db.query('INSERT INTO Campaigns (campaigner_id) VALUES ($1) RETURNING *', [campaigner_id]);
  
      if (result.rows.length > 0) {
        res.status(201).json(result.rows[0]);
      } else {
        res.status(500).json({ message: 'Failed to create Campaign' });
      }
    } catch (err) {
      console.error('Error executing query', err);
      res.status(500).json({ message: 'Internal server error' });
    }
  };
  
  const updateCampaign = async (req, res) => {
    const CampaignId = req.params.id;
    const { campaigner_id } = req.body;
  
    try {
      const result = await db.query('UPDATE Campaigns SET campaigner_id = $2 WHERE Campaign_id = $1 RETURNING *', [CampaignId, campaigner_id]);
  
      if (result.rows.length > 0) {
        res.status(200).json(result.rows[0]);
      } else {
        res.status(404).json({ message: 'Campaign not found' });
      }
    } catch (err) {
      console.error('Error executing query', err);
      res.status(500).json({ message: 'Internal server error' });
    }
  };
  
  const deleteCampaign = async (req, res) => {
    const CampaignId = req.params.id;
  
    try {
      const result = await db.query('DELETE FROM Campaigns WHERE Campaign_id = $1 RETURNING *', [CampaignId]);
  
      if (result.rows.length > 0) {
        res.status(200).json({ message: 'Campaign deleted successfully' });
      } else {
        res.status(404).json({ message: 'Campaign not found' });
      }
    } catch (err) {
      console.error('Error executing query', err);
      res.status(500).json({ message: 'Internal server error' });
    }
  };
  
  // eslint-disable-next-line no-undef
  module.exports = {
    getCampaigns,
    getCampaignById,
    createCampaign,
    updateCampaign,
    deleteCampaign,
  }