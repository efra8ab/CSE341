const express = require('express');
const router = express.Router();
const { getDb } = require('../db/connect');

router.get('/', async (req, res) => {
  try {
    const db = getDb();

    const doc =
      (await db.collection('professional').findOne({})) ??
      (await db.collection('user').findOne({}));

    if (!doc) {
      return res.status(404).json({
        message:
          'No professional document found. Insert one into either the "professional" or "user" collection.',
      });
    }

    const source = doc.user ?? doc;

    const payload = {
      professionalName:
        source.professionalName ??
        source.name ??
        (source.firstName && source.lastName
          ? `${source.firstName} ${source.lastName}`
          : '') ??
        '',
      base64Image:
        source.base64Image ??
        source.imageBase64 ??
        '',
      nameLink: {
        firstName:
          source.nameLink?.firstName ??
          source.firstName ??
          '',
        url:
          source.nameLink?.url ??
          source.website ??
          '',
      },
      primaryDescription:
        source.primaryDescription ??
        source.primary ??
        source.about ??
        '',
      workDescription1:
        source.workDescription1 ??
        source.work1 ??
        '',
      workDescription2:
        source.workDescription2 ??
        source.work2 ??
        '',
      linkTitleText:
        source.linkTitleText ??
        source.linkTitle ??
        '',
      linkedInLink: {
        text:
          source.linkedInLink?.text ??
          source.linkedinText ??
          source.linkedinLabel ??
          'LinkedIn',
        link:
          source.linkedInLink?.link ??
          source.linkedin ??
          '',
      },
      githubLink: {
        text:
          source.githubLink?.text ??
          source.githubText ??
          'Github',
        link:
          source.githubLink?.link ??
          source.github ??
          '',
      },
    };

    return res.status(200).json(payload);
  } catch (err) {
    console.error('Error in GET /professional:', err);
    return res
      .status(500)
      .json({ message: 'Server error fetching professional data.' });
  }
});

module.exports = router;
