import MyContext from "../../types/context";
import { CallbackQueryMiddleware } from "grammy";
import { MyCbQuery } from "../../types/query";

const langCbQueryHandler: CallbackQueryMiddleware<MyContext> = async (
  ctx: MyContext
) => {
  const cbData = ctx.callbackQuery?.data;
  const selectedLangCode = cbData?.slice(15, 17);
  const langTitle = ctx.t(`language.title-${selectedLangCode}`);
  ctx.session.__language_code = selectedLangCode;

  return await ctx.editMessageText(ctx.t("change-lang-success", { langTitle }));
};

export const langCbQuery: MyCbQuery = {
  pattern: /language.title/,
  handler: langCbQueryHandler
};
