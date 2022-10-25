import { DiscogsLabel } from "./label";
import { PagedResponse } from "./pagination";

type LabelRelease = DiscogsLabel & {
  format: string;
  catno: string;
};

export type DiscogsLabelReleasesResponse = PagedResponse<LabelRelease>;
