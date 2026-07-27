import type { Model } from "sequelize";

export const sanitizeUser = (user: Model) => {
  const { password, ...safeUser } = user.get({ plain: true }) as Record<
    string,
    unknown
  >;
  return safeUser;
};
