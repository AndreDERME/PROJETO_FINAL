
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/"
  },
  {
    "renderMode": 2,
    "route": "/carros"
  },
  {
    "renderMode": 2,
    "route": "/contato"
  },
  {
    "renderMode": 2,
    "route": "/servicos"
  },
  {
    "renderMode": 2,
    "route": "/model-focus"
  },
  {
    "renderMode": 2,
    "route": "/model-eco"
  },
  {
    "renderMode": 2,
    "route": "/model-feista"
  },
  {
    "renderMode": 2,
    "route": "/model-ford-ka"
  },
  {
    "renderMode": 2,
    "route": "/model-fusion"
  },
  {
    "renderMode": 2,
    "route": "/model-gt"
  },
  {
    "renderMode": 2,
    "route": "/model-taunus"
  },
  {
    "renderMode": 2,
    "route": "/model-mustang"
  },
  {
    "renderMode": 2,
    "route": "/ford150-xl"
  },
  {
    "renderMode": 2,
    "route": "/ford150"
  },
  {
    "renderMode": 2,
    "route": "/model-edge"
  },
  {
    "renderMode": 2,
    "route": "/fordcourier"
  },
  {
    "renderMode": 2,
    "route": "/financiamento"
  },
  {
    "renderMode": 2,
    "route": "/consorcio"
  },
  {
    "renderMode": 2,
    "route": "/privacidade"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 30438, hash: '6fc0ca845646e4bf65554728f305e0cdda29ab5da22081c4b38f83ec4a5b8334', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 22707, hash: '44d67226a2de1007efc804f5b194dac0008d6e509c4b3c78491f2bae72849d27', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 69345, hash: '5066a9d2ddad46ee564cce6b20ee89a240ee0ffc17939216206e6c46d25fa128', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'carros/index.html': {size: 56707, hash: '983e40016b688e18c26541c9d293b1941e88ba4892d004476e56b61c7f019cac', text: () => import('./assets-chunks/carros_index_html.mjs').then(m => m.default)},
    'model-feista/index.html': {size: 42551, hash: '1316e4de04a15b8b0ee798e5270b9041d0ae2d48475c55ae2f0763addfa9ae40', text: () => import('./assets-chunks/model-feista_index_html.mjs').then(m => m.default)},
    'model-mustang/index.html': {size: 42516, hash: '3c6fda89979d5c0cfd2d39d05ae8c3628c5fe1b02f3166984bf0bce63168e3ec', text: () => import('./assets-chunks/model-mustang_index_html.mjs').then(m => m.default)},
    'model-fusion/index.html': {size: 42538, hash: 'cfcf24c791e2dee9fac245fd2f8644c384eb49aadc82a13fa282c8403b558c7c', text: () => import('./assets-chunks/model-fusion_index_html.mjs').then(m => m.default)},
    'ford150/index.html': {size: 42549, hash: 'd3b461b944a5b0971fb5c0ecc3a28a68e29e6c525599f3a20885c755ca36c0f5', text: () => import('./assets-chunks/ford150_index_html.mjs').then(m => m.default)},
    'consorcio/index.html': {size: 50509, hash: 'ad3245b8e4acc5d0b58832676094b360c5584d333384d32bcfe1ba958e24054a', text: () => import('./assets-chunks/consorcio_index_html.mjs').then(m => m.default)},
    'fordcourier/index.html': {size: 42597, hash: '618348be19806337b2fd0a568aff21c59ad0fcca6cd12dc1cb23a75f92a57f87', text: () => import('./assets-chunks/fordcourier_index_html.mjs').then(m => m.default)},
    'model-eco/index.html': {size: 42441, hash: 'f5c5e5b90df52187d2f099fc3a1530f065bed1a39e89fc072dbdd85bf7528a9d', text: () => import('./assets-chunks/model-eco_index_html.mjs').then(m => m.default)},
    'contato/index.html': {size: 50036, hash: '7fc0a5daf6fb505b75ad5efd55a3b4bb9ba36c80479e2399c487986e3428dd97', text: () => import('./assets-chunks/contato_index_html.mjs').then(m => m.default)},
    'model-gt/index.html': {size: 42582, hash: 'ae68fe823af29fa6d49699187e78e06d1593f29214d762df80dbf01c31d86d2c', text: () => import('./assets-chunks/model-gt_index_html.mjs').then(m => m.default)},
    'financiamento/index.html': {size: 50075, hash: 'e54945def0a0e3851b700cdddd744c0ac01c08131a84274ca0bdc3d60288227f', text: () => import('./assets-chunks/financiamento_index_html.mjs').then(m => m.default)},
    'ford150-xl/index.html': {size: 42565, hash: 'eed279e2d7d541de612f77e331d4a446149a5970a8112e6369b2756c27648a36', text: () => import('./assets-chunks/ford150-xl_index_html.mjs').then(m => m.default)},
    'model-taunus/index.html': {size: 42555, hash: 'bc56a80b63fb3d59999882b4e225d7da3f096d7edeab99fe5fcd7696fefe5a0c', text: () => import('./assets-chunks/model-taunus_index_html.mjs').then(m => m.default)},
    'servicos/index.html': {size: 33572, hash: '66e634eb403438f1be0134ffa70eeb2faeda02375f4622d99a7373ac64b5dd20', text: () => import('./assets-chunks/servicos_index_html.mjs').then(m => m.default)},
    'model-edge/index.html': {size: 42454, hash: 'cd5eec80043d0deff1be3b04110505698d73a02daca3ccb23ffe44c9cf0d39fc', text: () => import('./assets-chunks/model-edge_index_html.mjs').then(m => m.default)},
    'privacidade/index.html': {size: 53538, hash: '1ff8907a2c79784763b840fd6c515e8f7d989f903a3db31fad34ac7844345997', text: () => import('./assets-chunks/privacidade_index_html.mjs').then(m => m.default)},
    'model-ford-ka/index.html': {size: 42517, hash: 'b9796d54179e525ad97e74b8844bc698e1b19607cb36ff4b557ef644c1af179a', text: () => import('./assets-chunks/model-ford-ka_index_html.mjs').then(m => m.default)},
    'model-focus/index.html': {size: 42451, hash: '82462cabc729eb59a76d129f1cae33277f6a7e8da5ffa9540c912d97a2de262e', text: () => import('./assets-chunks/model-focus_index_html.mjs').then(m => m.default)},
    'styles-VZ5QZLFH.css': {size: 8286, hash: 'BLlwf/k4070', text: () => import('./assets-chunks/styles-VZ5QZLFH_css.mjs').then(m => m.default)}
  },
};
