import { test } from "@/test.ts";

function removeChar(str: string): string {
  return str.slice(1, -1);
}

test(removeChar("eloquent"), "loquen");
test(removeChar("country"), "ountr");
test(removeChar("person"), "erso");
test(removeChar("ab"), "");
test(removeChar("Hello"), "ell");
