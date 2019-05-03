const models = require('../models');

const getDialog = (id) => {
    return models.dialogs.findAll({where: {id: id}})
};

const getCharacterDialogs = (characterName) => {
    return models.dialogs.findAll({order: [['seasonNumber', 'ASC']], where: {character: characterName}})
};

const getCharacterSeasonDialogs = (characterName, seasonNumber) => {
    return models.dialogs.findAll({order: [['seasonNumber', 'ASC']], where: {character: characterName, seasonNumber: seasonNumber}})
};

const getCharacterEpisodeDialogs = (characterName, seasonNumber, episodeNumber) => {
    return models.dialogs.findAll({order: [['episodeNumber', 'ASC']], where: {character: characterName, seasonNumber: seasonNumber, episodeNumber: episodeNumber}})
};

const getEpisodeDialogs = (seasonNumber, episodeNumber) => {
    return models.dialogs.findAll({order: [['dialogNumber', 'ASC']], where: {seasonNumber: seasonNumber, episodeNumber: episodeNumber}})
};

const getCharacters = () => {
    return models.dialogs.findAll({attributes: ['character'], group: ['character']})
};

const getSeasons = () => {
    return models.dialogs.findAll({attributes: ['seasonNumber'], group: ['seasonNumber']})
};

const getSeasonEpisodes = (seasonNumber) => {
    return models.dialogs.findAll({attributes: ['episodeNumber', 'episodeName'], group: ['episodeNumber', 'episodeName'], where: {seasonNumber: seasonNumber}})
};

const getEpisode = () => {
    return models.dialogs.findAll({order: [['seasonNumber', 'ASC']], attributes: ['seasonNumber', 'episodeNumber', 'episodeName'], group: ['seasonNumber', 'episodeNumber', 'episodeName']})
};

const getCharacterApparitions = (characterName) => {
    return models.dialogs.findAll({order: [['seasonNumber', 'ASC']], attributes: ['seasonNumber', 'episodeNumber', 'episodeName'], group: ['seasonNumber', 'episodeNumber', 'episodeName'], where: {character: characterName}})
};

module.exports = {
    getDialog,
    getCharacterDialogs,
    getCharacterSeasonDialogs,
    getCharacterEpisodeDialogs,
    getEpisodeDialogs,
    getCharacters,
    getSeasons,
    getSeasonEpisodes,
    getEpisode,
    getCharacterApparitions
};