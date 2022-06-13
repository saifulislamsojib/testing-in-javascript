(() => {
  var e = {
      359: (e) => {
        const t = function (e, t, n) {
          return !(!e || (t && 0 === e.trim().length) || (n && isNaN(+e)));
        };
        e.exports = {
          checkValidation: function (e, n, r) {
            return !!(t(e, !0, !0) && t(n, !0, !1) && t(r, !0, !1));
          },
          createElement: function (e, t, n = null) {
            const r = document.createElement(e);
            return n && r.classList.add(n), (r.textContent = t), r;
          },
          generateResult: function (e, t) {
            return `User ID: ${e} created an article titled ${t}`;
          },
          getUserInputs: function () {
            return {
              userIdInput: document.querySelector("input#userid"),
              titleInput: document.querySelector("input#title"),
              articleInput: document.querySelector("textarea#article"),
            };
          },
        };
      },
    },
    t = {};
  function n(r) {
    var u = t[r];
    if (void 0 !== u) return u.exports;
    var c = (t[r] = { exports: {} });
    return e[r](c, c.exports, n), c.exports;
  }
  (() => {
    const {
      checkValidation: e,
      createElement: t,
      generateResult: r,
      getUserInputs: u,
    } = n(359);
    document.querySelector("#addNewPostBtn").addEventListener("click", () => {
      const { userIdInput: n, titleInput: c, articleInput: l } = u();
      if (e(n.value, c.value, l.value)) {
        const e = r(n.value, c.value),
          u = t("p", e);
        document.querySelector(".article-list").appendChild(u);
      }
    });
  })();
})();
