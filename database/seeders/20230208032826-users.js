'use strict'
const uuid = require('uuid')
const { Op } = require('sequelize')
const { hashPassword } = require('../../libs/bcrypt')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const transaction = await queryInterface.sequelize.transaction()

    const usersSeeds = [
      {
        id: uuid.v4(),
        first_name: 'Marcos',
        last_name: 'Diaz',
        email: 'marcos@academlo.com',
        username: 'YouGamesDiaz',
        password: hashPassword('root'),
        created_at: new Date(),
        updated_at: new Date(),
      }, {
        id: uuid.v4(),
        first_name: 'Luis',
        last_name: 'Arteaga',
        email: 'luis@academlo.com',
        username: 'arteagaLuis',
        password: hashPassword('admin'),
        created_at: new Date(),
        updated_at: new Date(),
      },
    ]

    try {
      await queryInterface.bulkInsert('users', usersSeeds, { transaction })

      await transaction.commit()
    } catch (error) {
      await transaction.rollback()
      throw error
    }
  },

  async down(queryInterface, Sequelize) {
    const transaction = await queryInterface.sequelize.transaction()

    const userNames = [
      'YouGamesDiaz',
      'Arteaga',
    ]

    try {
      await queryInterface.bulkDelete(
        'users',
        {
          username: {
            [Op.or]: userNames,
          },
        },
        { transaction }
      )

      await transaction.commit()
    } catch (error) {
      await transaction.rollback()
      throw error
    }
  },
}
