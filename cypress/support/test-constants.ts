import faker from 'faker'

const contactReasons = [
    'Dúvida',
    'Problema',
    'Sugestão/Elogio',
    'Denúncia',
    'Outros'
]
export const defaultTestSolicitation = {
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    email: faker.internet.email(),
    reason: faker.random.arrayElement(contactReasons),
    subject: faker.lorem.words(10),
    description: faker.lorem.lines(4)
}
