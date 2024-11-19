import { useI18n } from "vue-i18n";

export function getNestedFormData(
  formData: FormData,
  // eslint-disable-next-line
  data: any,
  prekey: string | null = null
) {
  for (const key of Object.keys(data)) {
    let dataKey = key;
    if (prekey) {
      dataKey = `${prekey}[${key}]`;
    } else if (Array.isArray(data)) {
      dataKey = `[${dataKey}]`;
    }
    if (typeof data[key] == "object") {
      if (data[key] instanceof File) {
        formData.append(dataKey, data[key]);
      } else if (data[key] === null) {
        // pass
      } else {
        formData = getNestedFormData(formData, data[key], dataKey);
      }
    } else {
      formData.append(dataKey, data[key]);
    }
  }
  return formData;
}
export function removeFilesForPatch(
  fileList: { property: any; fieldName: any }[]
) {
  for (let file of fileList) {
    const property = file.property;
    const fieldName = file.fieldName;
    let field = property[fieldName];
    if (field === undefined || field === null || typeof field === "string") {
      delete property[fieldName];
    }
  }
}

export function mmcMemberDesignationLabel(designation: string) {
  const { locale } = useI18n({ useScope: "global" });
  let label = designation;
  const designation_map: { [key: string]: { en: string; ne: string } } = {
    chairperson: {
      en: "Chairperson",
      ne: "अधक्ष्य",
    },
    deputy_chairperson: {
      en: "Deputy Chairperson",
      ne: "उपाध्यक्ष",
    },
    secretary: {
      en: "Secretary",
      ne: "सचिव",
    },
    member_secretary: {
      en: "Member Secretary",
      ne: "सदस्य सचिव",
    },
    treasurer: {
      en: "Treasurer",
      ne: "कोषाध्यक्ष",
    },
    member: {
      en: "Member",
      ne: "सदस्य",
    },
    advisor: {
      en: "Advisor",
      ne: "सल्लाहकार",
    },
    legal_advisor: {
      en: "Legal Advisor",
      ne: "कानुनी सल्लाहकार",
    },
    financial_advisor: {
      en: "Financial Advisor",
      ne: "वित्तीय सल्लाहकार",
    },
    manager: {
      en: "Manager",
      ne: "व्यवस्थापक",
    },
    data_collector: {
      en: "Data Collector",
      ne: "डाटा कलेक्टर",
    },
  };
  if (designation in designation_map) {
    if (locale.value == "ne") {
      label = designation_map[designation].ne;
    } else {
      label = designation_map[designation].en;
    }
  }
  return label;
}

export function syncSleep(ms: number) {
  const start = new Date().getTime();
  for (let i = 0; i < 1e7; i++) {
    if (new Date().getTime() - start > ms) {
      break;
    }
  }
}

export async function sleep(ms: number) {
  await new Promise((resolve) => setTimeout(resolve, ms));
}
