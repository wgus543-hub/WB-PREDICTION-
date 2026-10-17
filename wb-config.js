// Config penyimpanan (Cloudflare Worker) - SITUS wgus543-hub
// Satu Worker dipakai semua akun; data tiap akun dipisah lewat nama "account".
// system:'legacy' = index.html versi satu halaman; kunci sesi situs ini memakai awalan wg_.
window.WB_STORE = {
  worker: 'https://steep-resonance-6a71.kjago7822.workers.dev',
  account: 'wgus543-hub',
  system: 'legacy',
  memberKey: 'wg_logged_member',
  adminKey: 'wg_admin_cred',
  bank: { prefix: 'wg_bank__', field: 'bankBinWG', app: 'prediksi', defaultLimit: 100 }
};
