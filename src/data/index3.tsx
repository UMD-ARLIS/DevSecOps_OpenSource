export interface Row {
  packageName: string;
  snykHealthScore: number;
  totalContributors: number;
  packageMaintenance: "Unfunded" | "_" | "Funded";
  dependentModels: (
    | "selimsef"
    | "wm"
    | "ntech"
    | "eighteen"
    | "medics"
    | "boken"
  )[];
}

export const data: Row[] = [
  {
    packageName: "numpy",
    snykHealthScore: 94,
    packageMaintenance: "Funded",
    dependentModels: ["selimsef", "wm", "ntech", "eighteen", "medics", "boken"],
    totalContributors: 450
  },
  {
    packageName: "torchvision",
    snykHealthScore: 97,
    packageMaintenance: "Unfunded",
    dependentModels: ["selimsef", "wm", "ntech", "eighteen", "medics", "boken"],
    totalContributors: 400
  },
  {
    packageName: "albumentations",
    snykHealthScore: 88,
    packageMaintenance: "Unfunded",
    dependentModels: ["selimsef", "ntech", "eighteen", "medics", "boken"],
    totalContributors: 90
  },
  {
    packageName: "boto3",
    snykHealthScore: 97,
    packageMaintenance: "Unfunded",
    dependentModels: ["selimsef", "wm", "ntech", "medics", "boken"],
    totalContributors: 110
  },
  {
    packageName: "opencv_python",
    snykHealthScore: 94,
    packageMaintenance: "Unfunded",
    dependentModels: ["selimsef", "ntech", "eighteen", "medics", "boken"],
    totalContributors: 30
  },
  {
    packageName: "opencv-python",
    snykHealthScore: 96,
    packageMaintenance: "Unfunded",
    dependentModels: ["wm"],
    totalContributors: 30
  },
  {
    packageName: "pandas",
    snykHealthScore: 96,
    packageMaintenance: "Funded",
    dependentModels: ["selimsef", "wm", "eighteen", "medics", "boken"],
    totalContributors: 420
  },
  {
    packageName: "torch",
    snykHealthScore: 94,
    packageMaintenance: "Unfunded",
    dependentModels: ["selimsef", "wm", "ntech", "eighteen", "boken"],
    totalContributors: 340
  },
  {
    packageName: "flask",
    snykHealthScore: 100,
    packageMaintenance: "Funded",
    dependentModels: ["selimsef", "wm", "ntech", "boken"],
    totalContributors: 410
  },
  {
    packageName: "pillow",
    snykHealthScore: 97,
    packageMaintenance: "Funded",
    dependentModels: ["selimsef", "wm", "eighteen", "boken"],
    totalContributors: 320
  },
  {
    packageName: "facenet_pytorch",
    snykHealthScore: 68,
    packageMaintenance: "Funded",
    dependentModels: ["selimsef", "medics", "boken"],
    totalContributors: 20
  },
  {
    packageName: "efficientnet_pytorch",
    snykHealthScore: 77,
    packageMaintenance: "Unfunded",
    dependentModels: ["ntech", "boken"],
    totalContributors: 30
  },
  {
    packageName: "pretrainedmodels",
    snykHealthScore: 61,
    packageMaintenance: "Unfunded",
    dependentModels: ["medics", "boken"],
    totalContributors: 20
  },
  {
    packageName: "scipy",
    snykHealthScore: 94,
    packageMaintenance: "Funded",
    dependentModels: ["medics"],
    totalContributors: 430
  },
  {
    packageName: "appdirs",
    snykHealthScore: 79,
    packageMaintenance: "Unfunded",
    dependentModels: ["wm"],
    totalContributors: 30
  },
  {
    packageName: "attrs",
    snykHealthScore: 97,
    packageMaintenance: "Funded",
    dependentModels: ["wm"],
    totalContributors: 110
  },
  {
    packageName: "autopep8",
    snykHealthScore: 88,
    packageMaintenance: "Unfunded",
    dependentModels: ["wm"],
    totalContributors: 40
  },
  {
    packageName: "backcall",
    snykHealthScore: 68,
    packageMaintenance: "Unfunded",
    dependentModels: ["wm"],
    totalContributors: 2
  },
  {
    packageName: "bleach",
    snykHealthScore: 97,
    packageMaintenance: "Unfunded",
    dependentModels: ["wm"],
    totalContributors: 70
  },
  {
    packageName: "certifi",
    snykHealthScore: 88,
    packageMaintenance: "Unfunded",
    dependentModels: ["wm"],
    totalContributors: 30
  },
  {
    packageName: "chardet",
    snykHealthScore: 88,
    packageMaintenance: "Unfunded",
    dependentModels: ["wm"],
    totalContributors: 40
  },
  {
    packageName: "cycler",
    snykHealthScore: 78,
    packageMaintenance: "Unfunded",
    dependentModels: ["wm"],
    totalContributors: 20
  },
  {
    packageName: "cython",
    snykHealthScore: 96,
    packageMaintenance: "Funded",
    dependentModels: ["medics"],
    totalContributors: 370
  },
  {
    packageName: "decorator",
    snykHealthScore: 88,
    packageMaintenance: "Unfunded",
    dependentModels: ["wm"],
    totalContributors: 20
  },
  {
    packageName: "decord",
    snykHealthScore: 76,
    packageMaintenance: "Unfunded",
    dependentModels: ["medics"],
    totalContributors: 10
  },
  {
    packageName: "defusedxml",
    snykHealthScore: 80,
    packageMaintenance: "Unfunded",
    dependentModels: ["wm"],
    totalContributors: 5
  },
  {
    packageName: "distlib",
    snykHealthScore: 72,
    packageMaintenance: "Unfunded",
    dependentModels: ["wm"],
    totalContributors: 0
  },
  {
    packageName: "docopt",
    snykHealthScore: 79,
    packageMaintenance: "Unfunded",
    dependentModels: ["wm"],
    totalContributors: 30
  },
  {
    packageName: "easydict",
    snykHealthScore: 56,
    packageMaintenance: "Unfunded",
    dependentModels: ["eighteen"],
    totalContributors: 7
  },
  {
    packageName: "einops",
    snykHealthScore: 72,
    packageMaintenance: "Unfunded",
    dependentModels: ["medics"],
    totalContributors: 20
  },
  {
    packageName: "elpy",
    snykHealthScore: 60,
    packageMaintenance: "Unfunded",
    dependentModels: ["wm"],
    totalContributors: 70
  },
  {
    packageName: "entrypoints",
    snykHealthScore: 73,
    packageMaintenance: "Unfunded",
    dependentModels: ["wm"],
    totalContributors: 8
  },
  {
    packageName: "faiss",
    snykHealthScore: 64,
    packageMaintenance: "Unfunded",
    dependentModels: ["medics"],
    totalContributors: 80
  },
  {
    packageName: "filelock",
    snykHealthScore: 73,
    packageMaintenance: "Unfunded",
    dependentModels: ["wm"],
    totalContributors: 10
  },
  {
    packageName: "flake8",
    snykHealthScore: 94,
    packageMaintenance: "Unfunded",
    dependentModels: ["wm"],
    totalContributors: 80
  },
  {
    packageName: "idna",
    snykHealthScore: 85,
    packageMaintenance: "Unfunded",
    dependentModels: ["wm"],
    totalContributors: 20
  },
  {
    packageName: "imageio",
    snykHealthScore: 81,
    packageMaintenance: "Funded",
    dependentModels: ["wm"],
    totalContributors: 70
  },
  {
    packageName: "importlib-metadata",
    snykHealthScore: 88,
    packageMaintenance: "Funded",
    dependentModels: ["wm"],
    totalContributors: 40
  },
  {
    packageName: "jedi",
    snykHealthScore: 91,
    packageMaintenance: "Funded",
    dependentModels: ["wm"],
    totalContributors: 130
  },
  {
    packageName: "jinja2",
    snykHealthScore: 100,
    packageMaintenance: "Funded",
    dependentModels: ["wm"],
    totalContributors: 260
  },
  {
    packageName: "jsonschema",
    snykHealthScore: 81,
    packageMaintenance: "Funded",
    dependentModels: ["wm"],
    totalContributors: 80
  },
  {
    packageName: "lmdb",
    snykHealthScore: 77,
    packageMaintenance: "Unfunded",
    dependentModels: ["medics"],
    totalContributors: 30
  },
  {
    packageName: "matplotlib",
    snykHealthScore: 77,
    packageMaintenance: "Unfunded",
    dependentModels: ["ntech"],
    totalContributors: 30
  },
  {
    packageName: "mccabe",
    snykHealthScore: 80,
    packageMaintenance: "Unfunded",
    dependentModels: ["wm"],
    totalContributors: 20
  },
  {
    packageName: "mistune",
    snykHealthScore: 80,
    packageMaintenance: "Funded",
    dependentModels: ["wm"],
    totalContributors: 30
  },
  {
    packageName: "mmcv",
    snykHealthScore: 87,
    packageMaintenance: "Unfunded",
    dependentModels: ["medics"],
    totalContributors: 130
  },
  {
    packageName: "mmdet",
    snykHealthScore: 90,
    packageMaintenance: "Unfunded",
    dependentModels: ["medics"],
    totalContributors: 240
  },
  {
    packageName: "nbconvert",
    snykHealthScore: 97,
    packageMaintenance: "Unfunded",
    dependentModels: ["wm"],
    totalContributors: 210
  },
  {
    packageName: "nbformat",
    snykHealthScore: 99,
    packageMaintenance: "Unfunded",
    dependentModels: ["wm"],
    totalContributors: 230
  },
  {
    packageName: "networkx",
    snykHealthScore: 96,
    packageMaintenance: "Unfunded",
    dependentModels: ["wm"],
    totalContributors: 430
  },
  {
    packageName: "notebook",
    snykHealthScore: 100,
    packageMaintenance: "Unfunded",
    dependentModels: ["wm"],
    totalContributors: 230
  },
  {
    packageName: "olefile",
    snykHealthScore: 61,
    packageMaintenance: "Unfunded",
    dependentModels: ["wm"],
    totalContributors: 20
  },
  {
    packageName: "pandocfilters",
    snykHealthScore: 85,
    packageMaintenance: "Unfunded",
    dependentModels: ["wm"],
    totalContributors: 40
  },
  {
    packageName: "parso",
    snykHealthScore: 86,
    packageMaintenance: "Unfunded",
    dependentModels: ["wm"],
    totalContributors: 50
  },
  {
    packageName: "pexpect",
    snykHealthScore: 83,
    packageMaintenance: "Unfunded",
    dependentModels: ["wm"],
    totalContributors: 80
  },
  {
    packageName: "pickleshare",
    snykHealthScore: 79,
    packageMaintenance: "Unfunded",
    dependentModels: ["wm"],
    totalContributors: 20
  },
  {
    packageName: "pipreqs",
    snykHealthScore: 65,
    packageMaintenance: "Unfunded",
    dependentModels: ["wm"],
    totalContributors: 50
  },
  {
    packageName: "prometheus-client",
    snykHealthScore: 100,
    packageMaintenance: "Unfunded",
    dependentModels: ["wm"],
    totalContributors: 110
  },
  {
    packageName: "prompt-toolkit",
    snykHealthScore: 88,
    packageMaintenance: "Unfunded",
    dependentModels: ["wm"],
    totalContributors: 180
  },
  {
    packageName: "ptyprocess",
    snykHealthScore: 84,
    packageMaintenance: "Unfunded",
    dependentModels: ["wm"],
    totalContributors: 20
  },
  {
    packageName: "pycodestyle",
    snykHealthScore: 95,
    packageMaintenance: "Unfunded",
    dependentModels: ["wm"],
    totalContributors: 110
  },
  {
    packageName: "pydocs",
    snykHealthScore: 42,
    packageMaintenance: "Unfunded",
    dependentModels: ["eighteen"],
    totalContributors: 1
  },
  {
    packageName: "pyflakes",
    snykHealthScore: 90,
    packageMaintenance: "Unfunded",
    dependentModels: ["wm"],
    totalContributors: 70
  },
  {
    packageName: "pygments",
    snykHealthScore: 94,
    packageMaintenance: "Unfunded",
    dependentModels: ["wm"],
    totalContributors: 390
  },
  {
    packageName: "pyparsing",
    snykHealthScore: 87,
    packageMaintenance: "Funded",
    dependentModels: ["wm"],
    totalContributors: 40
  },
  {
    packageName: "pyrsistent",
    snykHealthScore: 88,
    packageMaintenance: "Unfunded",
    dependentModels: ["wm"],
    totalContributors: 50
  },
  {
    packageName: "python-dateutil",
    snykHealthScore: 94,
    packageMaintenance: "Unfunded",
    dependentModels: ["wm"],
    totalContributors: 110
  },
  {
    packageName: "pytz",
    snykHealthScore: 80,
    packageMaintenance: "Funded",
    dependentModels: ["wm"],
    totalContributors: 20
  },
  {
    packageName: "pywavelets",
    snykHealthScore: 87,
    packageMaintenance: "Funded",
    dependentModels: ["wm"],
    totalContributors: 40
  },
  {
    packageName: "pyyaml",
    snykHealthScore: 85,
    packageMaintenance: "Unfunded",
    dependentModels: ["eighteen"],
    totalContributors: 40
  },
  {
    packageName: "pyzmq",
    snykHealthScore: 97,
    packageMaintenance: "Unfunded",
    dependentModels: ["wm"],
    totalContributors: 150
  },
  {
    packageName: "requests",
    snykHealthScore: 97,
    packageMaintenance: "Funded",
    dependentModels: ["wm"],
    totalContributors: 410
  },
  {
    packageName: "scikit_image",
    snykHealthScore: 91,
    packageMaintenance: "Funded",
    dependentModels: ["medics"],
    totalContributors: 360
  },
  {
    packageName: "scikit-image",
    snykHealthScore: 94,
    packageMaintenance: "Funded",
    dependentModels: ["wm"],
    totalContributors: 360
  },
  {
    packageName: "scikit_learn",
    snykHealthScore: 94,
    packageMaintenance: "Funded",
    dependentModels: ["medics"],
    totalContributors: 420
  },
  {
    packageName: "send2trash",
    snykHealthScore: 88,
    packageMaintenance: "Unfunded",
    dependentModels: ["wm"],
    totalContributors: 20
  },
  {
    packageName: "sip",
    snykHealthScore: 64,
    packageMaintenance: "Unfunded",
    dependentModels: ["wm"],
    totalContributors: 0
  },
  {
    packageName: "six",
    snykHealthScore: 85,
    packageMaintenance: "Unfunded",
    dependentModels: ["wm"],
    totalContributors: 60
  },
  {
    packageName: "tensorboardX",
    snykHealthScore: 85,
    packageMaintenance: "Unfunded",
    dependentModels: ["eighteen"],
    totalContributors: 70
  },
  {
    packageName: "terminado",
    snykHealthScore: 88,
    packageMaintenance: "Unfunded",
    dependentModels: ["wm"],
    totalContributors: 30
  },
  {
    packageName: "testpath",
    snykHealthScore: 76,
    packageMaintenance: "Unfunded",
    dependentModels: ["wm"],
    totalContributors: 7
  },
  {
    packageName: "tifffile",
    snykHealthScore: 81,
    packageMaintenance: "Unfunded",
    dependentModels: ["wm"],
    totalContributors: 1
  },
  {
    packageName: "timm",
    snykHealthScore: 82,
    packageMaintenance: "Funded",
    dependentModels: ["selimsef"],
    totalContributors: 50
  },
  {
    packageName: "tornado",
    snykHealthScore: 91,
    packageMaintenance: "Unfunded",
    dependentModels: ["wm"],
    totalContributors: 340
  },
  {
    packageName: "tqdm",
    snykHealthScore: 97,
    packageMaintenance: "Funded",
    dependentModels: ["selimsef"],
    totalContributors: 110
  },
  {
    packageName: "traitlets",
    snykHealthScore: 88,
    packageMaintenance: "Unfunded",
    dependentModels: ["wm"],
    totalContributors: 90
  },
  {
    packageName: "urllib3",
    snykHealthScore: 100,
    packageMaintenance: "Funded",
    dependentModels: ["wm"],
    totalContributors: 250
  },
  {
    packageName: "virtualenv",
    snykHealthScore: 97,
    packageMaintenance: "Unfunded",
    dependentModels: ["wm"],
    totalContributors: 60
  },
  {
    packageName: "wcwidth",
    snykHealthScore: 75,
    packageMaintenance: "Unfunded",
    dependentModels: ["wm"],
    totalContributors: 8
  },
  {
    packageName: "webencodings",
    snykHealthScore: 73,
    packageMaintenance: "Unfunded",
    dependentModels: ["wm"],
    totalContributors: 6
  },
  {
    packageName: "widgetsnbextension",
    snykHealthScore: 87,
    packageMaintenance: "Unfunded",
    dependentModels: ["wm"],
    totalContributors: 420
  },
  {
    packageName: "yarg",
    snykHealthScore: 49,
    packageMaintenance: "Unfunded",
    dependentModels: ["wm"],
    totalContributors: 1
  },
  {
    packageName: "zipp",
    snykHealthScore: 81,
    packageMaintenance: "Unfunded",
    dependentModels: ["wm"],
    totalContributors: 20
  },
  {
    packageName: "",
    snykHealthScore: 0,
    packageMaintenance: "_",
    dependentModels: [],
    totalContributors: 0
  }
];
