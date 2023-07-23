export interface Row {
  packageName: string;
  snykHealthScore: number;
  totalContributors: number;
  daysSinceLastRelease: number;
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
    totalContributors: 450,
    daysSinceLastRelease: 10
  },
  {
    packageName: "torchvision",
    snykHealthScore: 97,
    packageMaintenance: "Unfunded",
    dependentModels: ["selimsef", "wm", "ntech", "eighteen", "medics", "boken"],
    totalContributors: 400,
    daysSinceLastRelease: 60
  },
  {
    packageName: "albumentations",
    snykHealthScore: 88,
    packageMaintenance: "Unfunded",
    dependentModels: ["selimsef", "ntech", "eighteen", "medics", "boken"],
    totalContributors: 90,
    daysSinceLastRelease: 30
  },
  {
    packageName: "boto3",
    snykHealthScore: 97,
    packageMaintenance: "Unfunded",
    dependentModels: ["selimsef", "wm", "ntech", "medics", "boken"],
    totalContributors: 110,
    daysSinceLastRelease: 1
  },
  {
    packageName: "opencv_python",
    snykHealthScore: 94,
    packageMaintenance: "Unfunded",
    dependentModels: ["selimsef", "ntech", "eighteen", "medics", "boken"],
    totalContributors: 30,
    daysSinceLastRelease: 60
  },
  {
    packageName: "opencv-python",
    snykHealthScore: 96,
    packageMaintenance: "Unfunded",
    dependentModels: ["wm"],
    totalContributors: 30,
    daysSinceLastRelease: 60
  },
  {
    packageName: "pandas",
    snykHealthScore: 96,
    packageMaintenance: "Funded",
    dependentModels: ["selimsef", "wm", "eighteen", "medics", "boken"],
    totalContributors: 420,
    daysSinceLastRelease: 10
  },
  {
    packageName: "torch",
    snykHealthScore: 94,
    packageMaintenance: "Unfunded",
    dependentModels: ["selimsef", "wm", "ntech", "eighteen", "boken"],
    totalContributors: 340,
    daysSinceLastRelease: 60
  },
  {
    packageName: "flask",
    snykHealthScore: 100,
    packageMaintenance: "Funded",
    dependentModels: ["selimsef", "wm", "ntech", "boken"],
    totalContributors: 410,
    daysSinceLastRelease: 90
  },
  {
    packageName: "pillow",
    snykHealthScore: 97,
    packageMaintenance: "Funded",
    dependentModels: ["selimsef", "wm", "eighteen", "boken"],
    totalContributors: 320,
    daysSinceLastRelease: 60
  },
  {
    packageName: "facenet_pytorch",
    snykHealthScore: 68,
    packageMaintenance: "Funded",
    dependentModels: ["selimsef", "medics", "boken"],
    totalContributors: 20,
    daysSinceLastRelease: 0
  },
  {
    packageName: "efficientnet_pytorch",
    snykHealthScore: 77,
    packageMaintenance: "Unfunded",
    dependentModels: ["ntech", "boken"],
    totalContributors: 30,
    daysSinceLastRelease: 180
  },
  {
    packageName: "pretrainedmodels",
    snykHealthScore: 61,
    packageMaintenance: "Unfunded",
    dependentModels: ["medics", "boken"],
    totalContributors: 20,
    daysSinceLastRelease: 795
  },
  {
    packageName: "scipy",
    snykHealthScore: 94,
    packageMaintenance: "Funded",
    dependentModels: ["medics"],
    totalContributors: 430,
    daysSinceLastRelease: 24
  },
  {
    packageName: "appdirs",
    snykHealthScore: 79,
    packageMaintenance: "Unfunded",
    dependentModels: ["wm"],
    totalContributors: 30,
    daysSinceLastRelease: 365
  },
  {
    packageName: "attrs",
    snykHealthScore: 97,
    packageMaintenance: "Funded",
    dependentModels: ["wm"],
    totalContributors: 110,
    daysSinceLastRelease: 120
  },
  {
    packageName: "autopep8",
    snykHealthScore: 88,
    packageMaintenance: "Unfunded",
    dependentModels: ["wm"],
    totalContributors: 40,
    daysSinceLastRelease: 120
  },
  {
    packageName: "backcall",
    snykHealthScore: 68,
    packageMaintenance: "Unfunded",
    dependentModels: ["wm"],
    totalContributors: 2,
    daysSinceLastRelease: 365
  },
  {
    packageName: "bleach",
    snykHealthScore: 97,
    packageMaintenance: "Unfunded",
    dependentModels: ["wm"],
    totalContributors: 70,
    daysSinceLastRelease: 22
  },
  {
    packageName: "certifi",
    snykHealthScore: 88,
    packageMaintenance: "Unfunded",
    dependentModels: ["wm"],
    totalContributors: 30,
    daysSinceLastRelease: 90
  },
  {
    packageName: "chardet",
    snykHealthScore: 88,
    packageMaintenance: "Unfunded",
    dependentModels: ["wm"],
    totalContributors: 40,
    daysSinceLastRelease: 270
  },
  {
    packageName: "cycler",
    snykHealthScore: 78,
    packageMaintenance: "Unfunded",
    dependentModels: ["wm"],
    totalContributors: 20,
    daysSinceLastRelease: 2190
  },
  {
    packageName: "cython",
    snykHealthScore: 96,
    packageMaintenance: "Funded",
    dependentModels: ["medics"],
    totalContributors: 370,
    daysSinceLastRelease: 30
  },
  {
    packageName: "decorator",
    snykHealthScore: 88,
    packageMaintenance: "Unfunded",
    dependentModels: ["wm"],
    totalContributors: 20,
    daysSinceLastRelease: 90
  },
  {
    packageName: "decord",
    snykHealthScore: 76,
    packageMaintenance: "Unfunded",
    dependentModels: ["medics"],
    totalContributors: 10,
    daysSinceLastRelease: 60
  },
  {
    packageName: "defusedxml",
    snykHealthScore: 80,
    packageMaintenance: "Unfunded",
    dependentModels: ["wm"],
    totalContributors: 5,
    daysSinceLastRelease: 180
  },
  {
    packageName: "distlib",
    snykHealthScore: 72,
    packageMaintenance: "Unfunded",
    dependentModels: ["wm"],
    totalContributors: 0,
    daysSinceLastRelease: 0
  },
  {
    packageName: "docopt",
    snykHealthScore: 79,
    packageMaintenance: "Unfunded",
    dependentModels: ["wm"],
    totalContributors: 30,
    daysSinceLastRelease: 2555
  },
  {
    packageName: "easydict",
    snykHealthScore: 56,
    packageMaintenance: "Unfunded",
    dependentModels: ["eighteen"],
    totalContributors: 7,
    daysSinceLastRelease: 1095
  },
  {
    packageName: "einops",
    snykHealthScore: 72,
    packageMaintenance: "Unfunded",
    dependentModels: ["medics"],
    totalContributors: 20,
    daysSinceLastRelease: 365
  },
  {
    packageName: "elpy",
    snykHealthScore: 60,
    packageMaintenance: "Unfunded",
    dependentModels: ["wm"],
    totalContributors: 70,
    daysSinceLastRelease: 730
  },
  {
    packageName: "entrypoints",
    snykHealthScore: 73,
    packageMaintenance: "Unfunded",
    dependentModels: ["wm"],
    totalContributors: 8,
    daysSinceLastRelease: 1095
  },
  {
    packageName: "faiss",
    snykHealthScore: 64,
    packageMaintenance: "Unfunded",
    dependentModels: ["medics"],
    totalContributors: 80,
    daysSinceLastRelease: 720
  },
  {
    packageName: "filelock",
    snykHealthScore: 73,
    packageMaintenance: "Unfunded",
    dependentModels: ["wm"],
    totalContributors: 10,
    daysSinceLastRelease: 720
  },
  {
    packageName: "flake8",
    snykHealthScore: 94,
    packageMaintenance: "Unfunded",
    dependentModels: ["wm"],
    totalContributors: 80,
    daysSinceLastRelease: 120
  },
  {
    packageName: "idna",
    snykHealthScore: 85,
    packageMaintenance: "Unfunded",
    dependentModels: ["wm"],
    totalContributors: 20,
    daysSinceLastRelease: 90
  },
  {
    packageName: "imageio",
    snykHealthScore: 81,
    packageMaintenance: "Funded",
    dependentModels: ["wm"],
    totalContributors: 70,
    daysSinceLastRelease: 365
  },
  {
    packageName: "importlib-metadata",
    snykHealthScore: 88,
    packageMaintenance: "Funded",
    dependentModels: ["wm"],
    totalContributors: 40,
    daysSinceLastRelease: 12
  },
  {
    packageName: "jedi",
    snykHealthScore: 91,
    packageMaintenance: "Funded",
    dependentModels: ["wm"],
    totalContributors: 130,
    daysSinceLastRelease: 240
  },
  {
    packageName: "jinja2",
    snykHealthScore: 100,
    packageMaintenance: "Funded",
    dependentModels: ["wm"],
    totalContributors: 260,
    daysSinceLastRelease: 90
  },
  {
    packageName: "jsonschema",
    snykHealthScore: 81,
    packageMaintenance: "Funded",
    dependentModels: ["wm"],
    totalContributors: 80,
    daysSinceLastRelease: 720
  },
  {
    packageName: "lmdb",
    snykHealthScore: 77,
    packageMaintenance: "Unfunded",
    dependentModels: ["medics"],
    totalContributors: 30,
    daysSinceLastRelease: 120
  },
  {
    packageName: "matplotlib",
    snykHealthScore: 77,
    packageMaintenance: "Unfunded",
    dependentModels: ["ntech"],
    totalContributors: 30,
    daysSinceLastRelease: 120
  },
  {
    packageName: "mccabe",
    snykHealthScore: 80,
    packageMaintenance: "Unfunded",
    dependentModels: ["wm"],
    totalContributors: 20,
    daysSinceLastRelease: 1825
  },
  {
    packageName: "mistune",
    snykHealthScore: 80,
    packageMaintenance: "Funded",
    dependentModels: ["wm"],
    totalContributors: 30,
    daysSinceLastRelease: 1095
  },
  {
    packageName: "mmcv",
    snykHealthScore: 87,
    packageMaintenance: "Unfunded",
    dependentModels: ["medics"],
    totalContributors: 130,
    daysSinceLastRelease: 1
  },
  {
    packageName: "mmdet",
    snykHealthScore: 90,
    packageMaintenance: "Unfunded",
    dependentModels: ["medics"],
    totalContributors: 240,
    daysSinceLastRelease: 14
  },
  {
    packageName: "nbconvert",
    snykHealthScore: 97,
    packageMaintenance: "Unfunded",
    dependentModels: ["wm"],
    totalContributors: 210,
    daysSinceLastRelease: 60
  },
  {
    packageName: "nbformat",
    snykHealthScore: 99,
    packageMaintenance: "Unfunded",
    dependentModels: ["wm"],
    totalContributors: 230,
    daysSinceLastRelease: 150
  },
  {
    packageName: "networkx",
    snykHealthScore: 96,
    packageMaintenance: "Unfunded",
    dependentModels: ["wm"],
    totalContributors: 430,
    daysSinceLastRelease: 30
  },
  {
    packageName: "notebook",
    snykHealthScore: 100,
    packageMaintenance: "Unfunded",
    dependentModels: ["wm"],
    totalContributors: 14,
    daysSinceLastRelease: 0
  },
  {
    packageName: "olefile",
    snykHealthScore: 61,
    packageMaintenance: "Unfunded",
    dependentModels: ["wm"],
    totalContributors: 20,
    daysSinceLastRelease: 1095
  },
  {
    packageName: "pandocfilters",
    snykHealthScore: 85,
    packageMaintenance: "Unfunded",
    dependentModels: ["wm"],
    totalContributors: 40,
    daysSinceLastRelease: 300
  },
  {
    packageName: "parso",
    snykHealthScore: 86,
    packageMaintenance: "Unfunded",
    dependentModels: ["wm"],
    totalContributors: 50,
    daysSinceLastRelease: 150
  },
  {
    packageName: "pexpect",
    snykHealthScore: 83,
    packageMaintenance: "Unfunded",
    dependentModels: ["wm"],
    totalContributors: 80,
    daysSinceLastRelease: 730
  },
  {
    packageName: "pickleshare",
    snykHealthScore: 79,
    packageMaintenance: "Unfunded",
    dependentModels: ["wm"],
    totalContributors: 20,
    daysSinceLastRelease: 1095
  },
  {
    packageName: "pipreqs",
    snykHealthScore: 65,
    packageMaintenance: "Unfunded",
    dependentModels: ["wm"],
    totalContributors: 50,
    daysSinceLastRelease: 730
  },
  {
    packageName: "prometheus-client",
    snykHealthScore: 100,
    packageMaintenance: "Unfunded",
    dependentModels: ["wm"],
    totalContributors: 110,
    daysSinceLastRelease: 90
  },
  {
    packageName: "prompt-toolkit",
    snykHealthScore: 88,
    packageMaintenance: "Unfunded",
    dependentModels: ["wm"],
    totalContributors: 180,
    daysSinceLastRelease: 5
  },
  {
    packageName: "ptyprocess",
    snykHealthScore: 84,
    packageMaintenance: "Unfunded",
    dependentModels: ["wm"],
    totalContributors: 20,
    daysSinceLastRelease: 240
  },
  {
    packageName: "pycodestyle",
    snykHealthScore: 95,
    packageMaintenance: "Unfunded",
    dependentModels: ["wm"],
    totalContributors: 110,
    daysSinceLastRelease: 150
  },
  {
    packageName: "pydocs",
    snykHealthScore: 42,
    packageMaintenance: "Unfunded",
    dependentModels: ["eighteen"],
    totalContributors: 1,
    daysSinceLastRelease: 60
  },
  {
    packageName: "pyflakes",
    snykHealthScore: 90,
    packageMaintenance: "Unfunded",
    dependentModels: ["wm"],
    totalContributors: 70,
    daysSinceLastRelease: 150
  },
  {
    packageName: "pygments",
    snykHealthScore: 94,
    packageMaintenance: "Unfunded",
    dependentModels: ["wm"],
    totalContributors: 390,
    daysSinceLastRelease: 10
  },
  {
    packageName: "pyparsing",
    snykHealthScore: 87,
    packageMaintenance: "Funded",
    dependentModels: ["wm"],
    totalContributors: 40,
    daysSinceLastRelease: 365
  },
  {
    packageName: "pyrsistent",
    snykHealthScore: 88,
    packageMaintenance: "Unfunded",
    dependentModels: ["wm"],
    totalContributors: 50,
    daysSinceLastRelease: 60
  },
  {
    packageName: "python-dateutil",
    snykHealthScore: 94,
    packageMaintenance: "Unfunded",
    dependentModels: ["wm"],
    totalContributors: 110,
    daysSinceLastRelease: 30
  },
  {
    packageName: "pytz",
    snykHealthScore: 80,
    packageMaintenance: "Funded",
    dependentModels: ["wm"],
    totalContributors: 20,
    daysSinceLastRelease: 210
  },
  {
    packageName: "pywavelets",
    snykHealthScore: 87,
    packageMaintenance: "Funded",
    dependentModels: ["wm"],
    totalContributors: 40,
    daysSinceLastRelease: 730
  },
  {
    packageName: "pyyaml",
    snykHealthScore: 85,
    packageMaintenance: "Unfunded",
    dependentModels: ["eighteen"],
    totalContributors: 40,
    daysSinceLastRelease: 210
  },
  {
    packageName: "pyzmq",
    snykHealthScore: 97,
    packageMaintenance: "Unfunded",
    dependentModels: ["wm"],
    totalContributors: 150,
    daysSinceLastRelease: 21
  },
  {
    packageName: "requests",
    snykHealthScore: 97,
    packageMaintenance: "Funded",
    dependentModels: ["wm"],
    totalContributors: 410,
    daysSinceLastRelease: 30
  },
  {
    packageName: "scikit_image",
    snykHealthScore: 91,
    packageMaintenance: "Funded",
    dependentModels: ["medics"],
    totalContributors: 360,
    daysSinceLastRelease: 1
  },
  {
    packageName: "scikit-image",
    snykHealthScore: 94,
    packageMaintenance: "Funded",
    dependentModels: ["wm"],
    totalContributors: 360,
    daysSinceLastRelease: 1
  },
  {
    packageName: "scikit_learn",
    snykHealthScore: 94,
    packageMaintenance: "Funded",
    dependentModels: ["medics"],
    totalContributors: 420,
    daysSinceLastRelease: 120
  },
  {
    packageName: "send2trash",
    snykHealthScore: 88,
    packageMaintenance: "Unfunded",
    dependentModels: ["wm"],
    totalContributors: 20,
    daysSinceLastRelease: 17
  },
  {
    packageName: "sip",
    snykHealthScore: 64,
    packageMaintenance: "Unfunded",
    dependentModels: ["wm"],
    totalContributors: 0,
    daysSinceLastRelease: 0
  },
  {
    packageName: "six",
    snykHealthScore: 85,
    packageMaintenance: "Unfunded",
    dependentModels: ["wm"],
    totalContributors: 60,
    daysSinceLastRelease: 120
  },
  {
    packageName: "tensorboardX",
    snykHealthScore: 85,
    packageMaintenance: "Unfunded",
    dependentModels: ["eighteen"],
    totalContributors: 70,
    daysSinceLastRelease: 60
  },
  {
    packageName: "terminado",
    snykHealthScore: 88,
    packageMaintenance: "Unfunded",
    dependentModels: ["wm"],
    totalContributors: 30,
    daysSinceLastRelease: 7
  },
  {
    packageName: "testpath",
    snykHealthScore: 76,
    packageMaintenance: "Unfunded",
    dependentModels: ["wm"],
    totalContributors: 7,
    daysSinceLastRelease: 90
  },
  {
    packageName: "tifffile",
    snykHealthScore: 81,
    packageMaintenance: "Unfunded",
    dependentModels: ["wm"],
    totalContributors: 1,
    daysSinceLastRelease: 17
  },
  {
    packageName: "timm",
    snykHealthScore: 82,
    packageMaintenance: "Funded",
    dependentModels: ["selimsef"],
    totalContributors: 50,
    daysSinceLastRelease: 60
  },
  {
    packageName: "tornado",
    snykHealthScore: 91,
    packageMaintenance: "Unfunded",
    dependentModels: ["wm"],
    totalContributors: 340,
    daysSinceLastRelease: 300
  },
  {
    packageName: "tqdm",
    snykHealthScore: 97,
    packageMaintenance: "Funded",
    dependentModels: ["selimsef"],
    totalContributors: 110,
    daysSinceLastRelease: 2
  },
  {
    packageName: "traitlets",
    snykHealthScore: 88,
    packageMaintenance: "Unfunded",
    dependentModels: ["wm"],
    totalContributors: 90,
    daysSinceLastRelease: 300
  },
  {
    packageName: "urllib3",
    snykHealthScore: 100,
    packageMaintenance: "Funded",
    dependentModels: ["wm"],
    totalContributors: 250,
    daysSinceLastRelease: 60
  },
  {
    packageName: "virtualenv",
    snykHealthScore: 97,
    packageMaintenance: "Unfunded",
    dependentModels: ["wm"],
    totalContributors: 60,
    daysSinceLastRelease: 15
  },
  {
    packageName: "wcwidth",
    snykHealthScore: 75,
    packageMaintenance: "Unfunded",
    dependentModels: ["wm"],
    totalContributors: 8,
    daysSinceLastRelease: 365
  },
  {
    packageName: "webencodings",
    snykHealthScore: 73,
    packageMaintenance: "Unfunded",
    dependentModels: ["wm"],
    totalContributors: 6,
    daysSinceLastRelease: 1460
  },
  {
    packageName: "widgetsnbextension",
    snykHealthScore: 87,
    packageMaintenance: "Unfunded",
    dependentModels: ["wm"],
    totalContributors: 420,
    daysSinceLastRelease: 730
  },
  {
    packageName: "yarg",
    snykHealthScore: 49,
    packageMaintenance: "Unfunded",
    dependentModels: ["wm"],
    totalContributors: 1,
    daysSinceLastRelease: 2555
  },
  {
    packageName: "zipp",
    snykHealthScore: 81,
    packageMaintenance: "Unfunded",
    dependentModels: ["wm"],
    totalContributors: 20,
    daysSinceLastRelease: 60
  },
  {
    packageName: "",
    snykHealthScore: 0,
    packageMaintenance: "_",
    dependentModels: [],
    totalContributors: 0,
    daysSinceLastRelease: 0
  }
];
