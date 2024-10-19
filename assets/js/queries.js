const queriesGraphQL = {
    USER_DATA: `
    {
      user {
        id
        login
        firstName
        lastName
        auditRatio
        totalUp
        totalDown
      }
    }
    `, 

    SKILLS: `
    query user($userId: Int!) {
      user: user_by_pk(id: $userId) {
        transactions (
          order_by: [{ type: desc }, { amount: desc }]
          distinct_on: [type]
          where: { userId: { _eq: $userId }, type: { _like: "skill_%" } },
        )
        { type, amount }
      }
    }`,

    LEVEL_XP: `
    query rootEventDetails($userId: Int!, $rootEventId: Int!) {
      xp: transaction_aggregate(
        where: {
          userId: { _eq: $userId }
          type: { _eq: "xp" }
          eventId: { _eq: $rootEventId }
        }
      ) { aggregate { sum { amount } } }
      level: transaction(
        limit: 1
        order_by: { amount: desc }
        where: {
          userId: { _eq: $userId }
          type: { _eq: "level" }
          eventId: { _eq: $rootEventId }
        }
      ) { amount }
    }`,

    PROJECT_WORKING: `
    query ($userId: Int!, $eventId: Int!) {
      group(limit: 1, order_by: { id: desc }, where: {
        members: { userId: { _eq: $userId } }
        _or: [
          { eventId: { _eq: $eventId} },
          { event: { parentId: { _eq: $eventId } } }
        ],
        status: { _eq: working }
      }) {
        path
      }
    }`
};
Object.freeze(queriesGraphQL);

const EVENT_ID = ROOT_EVENT_ID = 216;